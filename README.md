# ディレクトリ構造

```
|--.devcontainer // remote containerの設定
|  |--devcontainer.env
|  |--devcontainer.json
|  |--docker-compose.yml
|  |--amd
|  |  |--Dockerfile
|--.gitignore
|--README.md
```

## awsへの接続
ローカル環境の`~/.aws`ディレクトリをマウントしているため、接続先情報はローカルに依存する

## Githubへの接続
AWS同様に`~/.ssh`ディレクトリをマウントしているため、接続先情報はローカルに依存する

接続情報が追加されたknown_hostsをsshディレクトリに追加する

## 環境変数
`.devecontainer`の直下に`devcontainer.env`ファイルを配置すると読み込まれる