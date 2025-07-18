
# カレンダーイベント追加アプリ

Google Apps Script (GAS) を使用した、カレンダーイベントを簡単に追加できるWebアプリケーションです。

## 機能

- カレンダーから日付を選択してイベントを追加
- 3種類のイベントタイプに対応
  - 休み（0時-23時、ミカン色）
  - レンタカー（14時-19時、ブルーベリー色）
  - 線路（22時-23時、ブルーベリー色）
- 複数の日付を一度に選択可能
- モダンなUIデザイン
  - レスポンシブデザイン
  - インタラクティブなボタンアニメーション
  - 直感的な操作性

## セットアップ手順

1. Google Apps Scriptプロジェクトを作成
2. 以下のファイルを作成
   - `main.js`: バックエンド処理
   - `index.html`: フロントエンドUI
3. デプロイ設定
   - 「新しいデプロイ」をクリック
   - 「種類の選択」で「ウェブアプリ」を選択
   - 「アクセスできるユーザー」を「自分」に設定
   - 「デプロイ」をクリック

## 使用方法

1. デプロイされたURLにアクセス
2. カレンダーから日付を選択
3. イベントの種類を選択（休み/レンタカー/線路）
4. 「送信」ボタンをクリック
5. 選択した日付にイベントが追加される

## 注意事項

- このアプリは個人のGoogleカレンダーにのみアクセスします
- デプロイURLは公開しないでください
- アクセス制限を適切に設定してください

## 技術スタック

- Google Apps Script
- HTML5
- CSS3
- JavaScript

## ファイル構成

- `main.js`: カレンダー操作のバックエンド処理
- `index.html`: ユーザーインターフェース
- `readme.md`: プロジェクトの説明

## セキュリティ

- カレンダー操作は実行ユーザーのみに制限
- デプロイ設定でアクセス制限を設定
- 個人のカレンダーにのみ影響

## ライセンス

このプロジェクトは個人利用を目的としています。
