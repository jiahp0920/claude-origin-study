<div align="center">

# Claude Code CLI 源码深度分析

**1884 个 TypeScript 文件 · 512K+ 行源码 · 18 个核心模块 · 系统性架构解读**

[![在线阅读](https://img.shields.io/badge/在线阅读-GitHub_Pages-8B5CF6?style=for-the-badge)](https://jiahp0920.github.io/claude-origin-study/)
[![模块数](https://img.shields.io/badge/核心模块-18-3B82F6?style=flat-square)]()
[![源码规模](https://img.shields.io/badge/源码规模-512K+-10B981?style=flat-square)]()

</div>

---

> **[点击这里在线阅读完整文档 →](https://jiahp0920.github.io/claude-origin-study/)**
>
> 暗色主题 · 侧边栏导航 · 架构图 · 数据流 · 流程图 · 搜索

## 这是什么？

基于 Claude Code CLI 公开源码的**系统性架构分析**。逐模块拆解 Anthropic 的 AI 编程助手是如何设计和实现的——从你输入 `claude` 到它帮你写完代码，中间经历了哪些工程决策和架构取舍。

## 分析模块一览

| # | 模块 | 解决什么问题 | 核心设计 |
|---|------|------------|---------|
| 1 | [启动链路](https://jiahp0920.github.io/claude-origin-study/00-startup.html) | 认证、环境检测、配置加载 | 渐进式初始化管道 |
| 2 | [Query 循环](https://jiahp0920.github.io/claude-origin-study/01-query-loop.html) | 模型↔工具的多轮对话引擎 | AsyncGenerator + 读写分离并发 |
| 3 | [工具调度](https://jiahp0920.github.io/claude-origin-study/02-tool-dispatch.html) | 把模型意图翻译成真实操作 | Tool 抽象 + MCP 扩展 + 并发控制 |
| 4 | [权限系统](https://jiahp0920.github.io/claude-origin-study/03-permissions.html) | 控制工具执行的安全性 | 13 步决策链 + allow/deny/ask |
| 5 | [风控与安全加固](https://jiahp0920.github.io/claude-origin-study/03b-security-hardening.html) | 纵深防御 Prompt 注入 | 15 层安全防线 |
| 6 | [Agent 架构](https://jiahp0920.github.io/claude-origin-study/04-agent-arch.html) | 多 Agent 协作执行复杂任务 | 5 种运行模式 + 消息传递 |
| 7 | [MCP 体系](https://jiahp0920.github.io/claude-origin-study/05-mcp.html) | 第三方工具扩展协议 | App Store 式插件生态 |
| 8 | [上下文管理](https://jiahp0920.github.io/claude-origin-study/06-context-mgmt.html) | Token 窗口管理 | 4 层压缩策略 |
| 9 | [插件系统](https://jiahp0920.github.io/claude-origin-study/07-plugins.html) | 用户态扩展框架 | 市场 + 技能 + 热加载 |
| 10 | [命令系统](https://jiahp0920.github.io/claude-origin-study/08-commands.html) | 斜杠命令交互 | 70+ 命令 + 多来源 |
| 11 | [UI 交互层](https://jiahp0920.github.io/claude-origin-study/09-ui.html) | 终端界面渲染 | React + Ink + Yoga 布局 |
| 12 | [服务层](https://jiahp0920.github.io/claude-origin-study/10-services.html) | 后台异步服务 | fail-open + GrowthBook |
| 13 | [Hook 机制](https://jiahp0920.github.io/claude-origin-study/11-hooks.html) | 生命周期拦截 | Pre/Post 钩子 + React Hooks |
| 14 | [外部集成](https://jiahp0920.github.io/claude-origin-study/12-external.html) | Shell/Git/浏览器/语音 | 零子进程 Git 缓存 |
| 15 | [配置与迁移](https://jiahp0920.github.io/claude-origin-study/13-config.html) | 用户偏好管理 | 5 层配置层级 + Zod 验证 |
| 16 | [Native 能力](https://jiahp0920.github.io/claude-origin-study/14-native.html) | 高性能渲染/搜索/布局 | Rust→TS 全部重写 |
| 17 | [成本与限流](https://jiahp0920.github.io/claude-origin-study/15-cost-limits.html) | Token 预算和费用控制 | 实时统计 + 优雅降级 |
| 18 | [反蒸馏与输出保护](https://jiahp0920.github.io/claude-origin-study/16-anti-distillation.html) | 防止输出被用于训练竞品 | 7 层纵深防御 |
| 19 | [Buddy 宠物系统](https://jiahp0920.github.io/claude-origin-study/17-buddy.html) | 终端虚拟宠物 | 确定性生成 + ASCII 动画 |
| 20 | [遥测与用户画像](https://jiahp0920.github.io/claude-origin-study/18-telemetry.html) | 多管道数据收集与分析 | Datadog + BigQuery + GrowthBook |

## 流程图

| 流程图 | 说明 |
|--------|------|
| [查询生命周期](https://jiahp0920.github.io/claude-origin-study/flows/query-lifecycle.html) | 从用户输入到任务完成的完整流程 |
| [工具执行流程](https://jiahp0920.github.io/claude-origin-study/flows/tool-execution.html) | 工具调用的权限检查与并发执行 |
| [Agent 协作流程](https://jiahp0920.github.io/claude-origin-study/flows/agent-collab.html) | 多 Agent 拆分任务与汇总结果 |

## 为什么看这个？

### 可视化 — 一目了然

全网首个从**可视化角度**系统性拆解 Claude Code 的分析项目。不是贴源码加注释，而是用分层架构图、数据流图、拓扑图把每个模块的内部结构画出来——**看图就能理解设计意图，不需要先读懂 512K 行源码**。

### 深度 — 不止于表面

每个模块深入到**函数级实现细节**：关键算法的源码片段、决策链的完整步骤、并发控制的具体机制、安全防线的逐层拆解。不是"这个模块负责什么"的泛泛介绍，而是"它为什么要这样设计、不这样设计会出什么问题"的工程决策分析。

### 实践价值 — 能直接用

每个模块附带**垂直 Agent 实践借鉴**：将 CC 的设计模式映射到具体业务场景（如客服 Agent），给出可落地的代码示例和"必须抄 vs 不需要抄"的落地清单。不是看完觉得"好厉害"就完了，而是看完知道"我该怎么做"。

## 谁应该看这个？

| 角色 | 能获得什么 |
|------|-----------|
| **架构师 / Tech Lead** | AI Agent 系统的架构范式：多 Agent 协作、工具调度、上下文管理、安全防御的工程实现 |
| **AI 应用开发者** | MCP 插件开发、Prompt 编排、流式输出、并发控制的一手实现参考 |
| **Agent 产品经理** | 理解 Agent 能做什么、不能做什么，技术边界的认知帮助做出更好的产品决策 |
| **安全工程师** | 15 层纵深防御体系、反蒸馏 7 层防护、Prompt 注入防御的实战方案 |
| **前端工程师** | 终端 UI（React + Ink）、虚拟列表、Yoga 布局、ANSI 渲染的完整实现 |
| **任何对 AI Agent 感兴趣的人** | 通过可视化的方式快速理解一个生产级 AI Agent 是怎么设计和运行的 |

## 搜索关键词

`Claude Code` `源码分析` `架构分析` `Anthropic` `AI Agent` `CLI` `MCP` `Model Context Protocol` `工具调度` `权限系统` `上下文管理` `反蒸馏` `Prompt注入防御` `多Agent协作` `Agent架构` `垂直Agent` `TypeScript` `LLM应用` `AI编程助手` `终端UI` `Zod配置验证` `GrowthBook A/B测试` `Datadog监控` `OpenTelemetry` `并发控制` `读写分离` `流式输出` `沙箱隔离` `OAuth认证`

## 声明

本文档仅用于技术学习和架构分析目的。源码分析基于公开泄漏的代码，所有商标和版权归 Anthropic 所有。未经授权不得用于商业用途。
