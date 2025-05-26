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
    
    // イベントの設定
    let title, startHour, endHour, colorId;
    
    switch(type) {
      case '1': // 休み
        title = '休み';
        startHour = 0;
        endHour = 23;
        colorId = '6'; // ミカン色
        break;
      case '2': // レンタカー
        title = 'レンタカー';
        startHour = 14;
        endHour = 19;
        colorId = '9'; // ブルーベリー色
        break;
      case '3': // 線路
        title = '線路';
        startHour = 22;
        endHour = 23;
        colorId = '9'; // ブルーベリー色
        break;
      default:
        throw new Error('無効な種類が選択されました');
    }
    
    // 各日付に対してイベントを作成
    const createdEvents = [];
    dates.forEach(day => {
      const startDate = new Date(year, month - 1, day, startHour, 0, 0);
      const endDate = new Date(year, month - 1, day, endHour, 0, 0);
      
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
