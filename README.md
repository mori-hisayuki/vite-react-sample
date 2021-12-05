# 使用方法

実際に使っているときのディレクトリ構造

```
|--.devcontainer
|  |--aws
|  |  |--config
|  |  |--credentials
|  |--devcontainer.env
|  |--devcontainer.json
|  |--docker-compose.yml
|  |--node
|  |  |--Dockerfile
|  |--ssh
|  |  |--config
|  |  |--github
|  |  |--github.pub
|  |  |--known_hosts
|--.gitignore
|--README.md
```

## awsへの接続
AWSへ接続する際の`config`と`credentials`を追加する

## Githubへの接続
Githubへ接続する際のSSHキー`***`と`***.pub`を追加する
キーは`ssh-keygen`コマンドで作成
作成したkeyでの接続情報をknown_hostsに追加する

```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

接続情報が追加されたknown_hostsをsshディレクトリに追加する

## 環境変数
`.devecontainer`の直下に`devcontainer.env`ファイルを配置すると読み込まれる