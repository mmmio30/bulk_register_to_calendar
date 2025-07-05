function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('カレンダー選択')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function processFormData(data) {
  try {
    const year = parseInt(data.year);
    const month = parseInt(data.month);
    const dates = data.dates.map(date => parseInt(date));
    const type = data.type;
    
    // カレンダーサービスの取得
    const calendar = CalendarApp.getDefaultCalendar();
    
    // 入力欄から値を取得（フォールバックとして規定値を使用）
    let title = data.title || '予定';
    let startTime = data.startTime || '00:00';
    let endTime = data.endTime || '23:00';
    let colorId = data.colorId || '1';
    
    // 時間を時間と分に分割
    const startParts = startTime.split(':');
    const endParts = endTime.split(':');
    const startHour = parseInt(startParts[0]);
    const startMinute = parseInt(startParts[1]);
    const endHour = parseInt(endParts[0]);
    const endMinute = parseInt(endParts[1]);
    
    // 各日付に対してイベントを作成
    const createdEvents = [];
    dates.forEach(day => {
      const startDate = new Date(year, month - 1, day, startHour, startMinute, 0);
      const endDate = new Date(year, month - 1, day, endHour, endMinute, 0);
      
      const event = calendar.createEvent(
        title,
        startDate,
        endDate,
        {
          color: colorId
        }
      );
      
      // イベントの色を設定
      event.setColor(colorId);
      
      createdEvents.push({
        title: title,
        date: `${year}年${month}月${day}日`,
        link: event.getLastUpdated()
      });
    });
    
    return {
      success: true,
      message: 'イベントが正常に作成されました。',
      events: createdEvents
    };
    
  } catch (error) {
    return {
      success: false,
      message: 'エラーが発生しました: ' + error.toString()
    };
  }
}
