# React/Redux

## 環境設定ファイル
- `.eslintrc.js` コード補正チェックファイル
- `.gitignore git` git除外ファイル
- `package.json` 使用モジュール一覧/実行コマンドスニペット
- `Readme.md` GitHub使用説明ファイル
- `webpack.config.js` モジュールバンドラー(JSやcssを1つに結合)
- `yarn-error.log/yarn.lock` yarn(npm上位プラグイン)履歴ファイル

## 編集ファイル
- `src/components/~.jsx` jsx(html的に書けるjs)編集ファイル
- `src/domain` RakutenAPIでホテルの位置情報を表示
- `src/lib` RakutenAPIでホテルの位置情報を取得
- `stylesheet` sass記法のcssファイル

## アップロード最終ファイル
- `public/index.html`
- `public/bundle.js`

## 環境構築

1. **デスクトップフォルダ内に移動**
~~~shell
$ cd ~/Desktop/
~~~

2. **リモートリポジトリをクローン(ダウンロード)**
~~~git
$ git clone git@github.com:arihito/React-Udemy.git
~~~

3. **ローカルリポジトリ内に移動**
~~~shell
$ cd React-Udemy
~~~

4. **npmモジュールを追加**
~~~npm
$ npm install
~~~

## ビルド

5. **プロジェクトをビルド**
~~~npm
$ npm run start
~~~

6. **ブラウザの「localhost:8080」にアクセス**

7. **ブランチを変更**
~~~shell
$ Ctrl + c
~~~
~~~git
$ git checkout searchAddress
$ npm run start
~~~
~~~npm
$ npm run start
~~~
