# AI 辅助编程与 DeepSeek API 接入

> 最后核验：2026-07-21  
> 易变化内容：模型名称、价格、工具集成方式和限速规则。使用前请再次检查官方文档。

AI 编程工具的价值是降低理解代码、补测试、定位错误和生成重复代码的成本。它不能替代运行、测试、代码审查、数据检查和科研判断。

## 先选择使用方式

| 方式 | 适合任务 | 主要风险 |
| --- | --- | --- |
| IDE 补全或聊天 | 局部补全、解释函数、生成小段代码 | 容易接受未经检查的局部错误 |
| IDE Agent | 跨文件修改、补测试、重构模块 | 修改范围可能失控 |
| 终端 Agent | 读取仓库、执行测试、修改脚本 | 可能执行危险命令或改动大量文件 |
| 网页聊天 | 解释报错、讨论设计、审查代码片段 | 缺少完整仓库上下文 |
| API 脚本 | 批量代码审查、日志分析、自动生成候选补丁 | 需要自己处理密钥、重试、成本和输出校验 |
| 本地模型 | 保密代码、离线环境 | 能力、上下文和部署成本可能受限 |

常见工具包括 GitHub Copilot、Cursor、Claude Code、OpenCode、Aider、Deep Code 等。不要只比较模型榜单，先检查：

- 能否限制修改文件范围；
- 能否展示 diff；
- 能否运行测试但不自动提交；
- 是否支持项目规则文件；
- 是否会上传完整仓库；
- 是否允许配置自定义 API；
- 出错后能否回滚。

## 一个可靠的 AI 编程闭环

```text
明确问题和验收标准
→ 提供最小必要上下文
→ 让 AI 先解释和提出计划
→ 只生成小范围修改
→ 人工检查 diff
→ 运行测试、静态检查和最小实验
→ 检查性能、数据和指标变化
→ 记录采用或拒绝原因
```

缺少“运行验证”和“检查 diff”，就不能声称代码已经修复。

## 最适合交给 AI 的任务

- 解释陌生函数、数据流和调用关系；
- 将报错缩小为最小复现；
- 为确定行为补单元测试；
- 生成参数解析、数据读取和日志记录样板；
- 把重复代码重构成小函数；
- 检查空值、维度、边界条件和异常处理；
- 根据实验配置生成运行命令；
- 审查指标实现是否与定义一致；
- 比较两个 commit 的行为差异；
- 根据日志提出候选原因，但不直接宣布根因。

## 科研代码额外检查

普通软件测试通过，不等于科研结果可信。还要检查：

- 训练、验证和测试数据是否泄漏；
- 指标实现是否与论文或官方脚本一致；
- 随机种子是否真正生效；
- 数据版本、模型版本和配置是否记录；
- baseline 与新方法是否使用相同预算；
- 是否只保存最好一次运行；
- AI 是否修改了默认参数、评价口径或数据过滤规则；
- 结果数字是否来自真实运行，而不是模型生成。

## 提示词结构

```text
任务：修复哪个具体问题？
上下文：相关文件、报错、输入输出和运行环境是什么？
限制：哪些文件不能改？哪些行为必须保持？
验收：哪些测试、命令或输出必须通过？
输出：先解释原因和计划，再给最小 diff；不要声称已运行未实际运行的命令。
```

示例：

```text
任务：定位评估脚本中 macro-F1 与官方结果不一致的原因。
上下文：只查看 metrics.py、evaluate.py 和一段最小输入输出。
限制：不要修改数据文件，不要更换指标定义，不要重构无关代码。
验收：给出最小复现、候选原因、需要新增的测试和最小补丁。
输出：区分已从代码确认的事实、需要运行验证的判断和纯推测。
```

## 不应直接交给 AI 的操作

- 删除数据、覆盖 checkpoint 或批量改写仓库；
- 修改数据库、云资源或生产环境；
- 自动接受依赖升级和迁移脚本；
- 将未公开代码、密钥、个人数据或审稿材料上传到未知服务；
- 根据模型生成的结果填写论文表格；
- 在没有测试和日志时自动提交或合并代码；
- 让模型自行决定研究结论或选择性删除负结果。

## DeepSeek API：最小接入

DeepSeek API 当前支持 OpenAI 兼容格式。官方 OpenAI 格式 Base URL 为：

```text
https://api.deepseek.com
```

截至 2026-07-21，推荐模型名为：

- `deepseek-v4-flash`：日常代码解释、候选补丁和批量低成本任务；
- `deepseek-v4-pro`：复杂代码审查、架构分析和需要更强推理的任务。

旧名称 `deepseek-chat` 和 `deepseek-reasoner` 将于 2026-07-24 弃用，不要在新代码中继续使用。

### 1. 安装依赖

```bash
python -m pip install --upgrade openai
```

### 2. 设置环境变量

Linux 或 macOS：

```bash
export DEEPSEEK_API_KEY="你的密钥"
```

Windows PowerShell：

```powershell
$env:DEEPSEEK_API_KEY="你的密钥"
```

不要把密钥直接写进 Python 文件，也不要提交 `.env`、配置文件或终端历史中的密钥。

### 3. 第一次调用

```python
import os
from openai import OpenAI

api_key = os.environ.get("DEEPSEEK_API_KEY")
if not api_key:
    raise RuntimeError("DEEPSEEK_API_KEY is not set")

client = OpenAI(
    api_key=api_key,
    base_url="https://api.deepseek.com",
    timeout=60.0,
)

response = client.chat.completions.create(
    model="deepseek-v4-flash",
    messages=[
        {
            "role": "system",
            "content": (
                "You are a careful programming assistant. "
                "Do not claim that code was executed unless logs are provided."
            ),
        },
        {
            "role": "user",
            "content": "Explain this bug and propose the smallest testable fix.",
        },
    ],
    stream=False,
    extra_body={"thinking": {"type": "disabled"}},
)

content = response.choices[0].message.content
if not content:
    raise RuntimeError("Model returned empty content")

print(content)
```

日常补全和格式转换通常不需要思考模式。复杂代码审查可以改用 `deepseek-v4-pro` 并启用：

```python
response = client.chat.completions.create(
    model="deepseek-v4-pro",
    messages=messages,
    reasoning_effort="high",
    extra_body={"thinking": {"type": "enabled"}},
)
```

思考模式下，`temperature`、`top_p` 等参数可能不生效，不要依赖这些参数控制输出。

## 一个带重试的最小封装

```python
from __future__ import annotations

import os
import random
import time
from typing import Sequence

from openai import APIConnectionError, APIStatusError, OpenAI, RateLimitError

RETRYABLE_STATUS = {429, 500, 503}


def build_client() -> OpenAI:
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    if not api_key:
        raise RuntimeError("DEEPSEEK_API_KEY is not set")

    return OpenAI(
        api_key=api_key,
        base_url="https://api.deepseek.com",
        timeout=90.0,
        max_retries=0,
    )


def ask_deepseek(
    messages: Sequence[dict[str, str]],
    *,
    model: str = "deepseek-v4-flash",
    max_attempts: int = 4,
) -> str:
    client = build_client()

    for attempt in range(max_attempts):
        try:
            response = client.chat.completions.create(
                model=model,
                messages=list(messages),
                stream=False,
                extra_body={"thinking": {"type": "disabled"}},
            )
            content = response.choices[0].message.content
            if not content:
                raise RuntimeError("Model returned empty content")
            return content

        except RateLimitError:
            retryable = True
        except APIConnectionError:
            retryable = True
        except APIStatusError as exc:
            retryable = exc.status_code in RETRYABLE_STATUS
            if not retryable:
                raise

        if not retryable or attempt == max_attempts - 1:
            raise RuntimeError("DeepSeek API request failed after retries")

        delay = min(2**attempt, 8) + random.random()
        time.sleep(delay)

    raise RuntimeError("Unreachable")
```

生产环境还应增加：

- 请求 ID、模型名、时间和耗时日志；
- token 使用量与预算限制；
- 超时、取消和并发控制；
- 输入长度限制；
- 敏感信息清洗；
- 输出 schema 验证；
- 用户隔离；
- 失败降级和人工复核。

## 接入编程 Agent

部分 Agent 工具允许配置 OpenAI 或 Anthropic 兼容接口。接入前按以下顺序处理：

1. 只使用工具和 DeepSeek 官方集成文档中的配置字段；
2. 将 API Key 放入环境变量或密钥管理服务；
3. 先在测试仓库验证读取、修改和命令执行权限；
4. 默认关闭自动提交、自动合并和危险命令；
5. 使用项目规则文件限制可修改路径和测试命令；
6. 每次升级工具或模型后重新做最小验证。

不要把某个 Agent 能成功运行一次，等同于它可以安全修改真实科研仓库。

## API 使用记录模板

```text
任务：
调用时间：
模型与模式：
代码 commit：
输入材料范围：
输出文件或 diff：
执行的测试：
实际运行结果：
人工修改：
是否采用：
成本或 token：
风险与未验证项：
```

## 官方来源

- [DeepSeek API 首次调用](https://api-docs.deepseek.com/zh-cn/)
- [DeepSeek 模型与价格](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)
- [DeepSeek 思考模式](https://api-docs.deepseek.com/zh-cn/guides/thinking_mode)
- [DeepSeek 错误码](https://api-docs.deepseek.com/quick_start/error_codes)
- [DeepSeek 编程 Agent 接入](https://api-docs.deepseek.com/zh-cn/guides/coding_agents)
- [API 密钥安全原则](https://help.openai.com/zh-hans-cn/articles/5112595-best-practices-for-api-key-safety)

## 最终检查

- [ ] 密钥未出现在代码、日志、截图和 Git 历史中
- [ ] AI 只获得完成任务所需的最小上下文
- [ ] 修改范围和验收标准明确
- [ ] 人工检查了 diff
- [ ] 测试和命令真实运行过
- [ ] 科研指标、数据和配置没有被静默改变
- [ ] API 错误、超时和限速有处理
- [ ] 模型名称和官方文档仍然有效
- [ ] 最终代码和研究结论由研究者负责
