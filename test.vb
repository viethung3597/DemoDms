import json
import sys

from io import TextIOWrapper
from operation_first_legal_action import initialize, get_action, finalize

# AIと対戦環境とのインターフェースを取るモジュールです。

# node.jsからの起動で文字化けしたので、対策をします。
sys.stdout = TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

while True:
    try:
        # 標準入力からメッセージを受信します。
        playername = input('Player Name >> ')
        message = json.loads(playername)

        # 初期化処理なのか、ターンが回ってきたのか、終了処理なのかをPython3.10で追加されたmatchで分岐します。
        match message['command']:
            # 初期化処理。
            case 'initialize':
                initialize()
                print(json.dumps('OK'))

            # ターンが回ってきた時。
            case 'getAction':
                # AIに実行する手を作成させます。
                action = get_action(message['state']['layout'],
                                    message['state']['otherLayout'],
                                    message['state']['flags'],
                                    message['state']['hand'],
                                    message['state']['otherHandLength'],
                                    message['state']['stockLength'],
                                    message['state']['playFirst'])
                # 手を出力します。
                print(json.dumps(action))

            # 終了処理。
            case 'finalize':
                finalize()
                print(json.dumps('OK'))

    except EOFError:
        break
import sys

# AI本体のモジュールです。このモジュールを修正してみてください。

# 初期化します。
def initialize():
    print('*** 最初の合法手作戦(Python) ***', '初期化', file=sys.stderr)  # 標準出力は通信で使用するので、標準エラー出力にログを出力します。


# 手を取得します。
def get_action(layout, other_layout, flags, hand, other_hand_length, stock_length, play_first):
    print('最初の合法手を選択します', file=sys.stderr)  # 標準出力は通信で使用するので、標準エラー出力にログを出力します。

    # 合法手の集合を取得します。
    def get_legal_actions():
        for i, _ in enumerate(hand):
            for j, (flag, layout_line) in enumerate(zip(flags, layout)):
                if flag['owner'] is None and len(layout_line) < 3:  # flag['owner']が0の場合、Pythonだと偽になってしまうので注意！
                    yield {'from': i, 'to': j}

    # 最初の合法手を選択します。
    return tuple(get_legal_actions())[0]


# 終了します。
def finalize():
    print('*** 最初の合法手作戦(Python) ***', '終了', file=sys.stderr)
