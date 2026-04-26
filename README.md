# Claude Code CLI 源码深度分析

基于 Claude Code CLI 泄漏源码的系统性架构分析文档，涵盖启动链路、核心循环、工具调度、权限系统、Agent 架构、MCP 体系等 17 个核心模块。

## 在线浏览

推荐直接打开 `index.html` 开始浏览，或使用 GitHub Pages。

## 文档结构

### 总览
| 文件 | 内容 |
|------|------|
| [index.html](index.html) | 架构全景总览 |
| [reading-guide.html](reading-guide.html) | 阅读指南 |
| [dependency-map.html](dependency-map.html) | 模块依赖图 |
| [vertical-agent-guide.html](vertical-agent-guide.html) | 垂直 Agent 设计指南 |

### 核心流程
| 文件 | 内容 |
|------|------|
| [00-startup.html](00-startup.html) | 启动链路 |
| [01-query-loop.html](01-query-loop.html) | Query 循环 — 核心引擎 |
| [03-permissions.html](03-permissions.html) | 权限系统 |
| [03b-security-hardening.html](03b-security-hardening.html) | 风控与安全加固 |

### 核心机制
| 文件 | 内容 |
|------|------|
| [02-tool-dispatch.html](02-tool-dispatch.html) | 工具调度 |
| [04-agent-arch.html](04-agent-arch.html) | Agent 架构 |
| [05-mcp.html](05-mcp.html) | MCP 体系 |
| [07-plugins.html](07-plugins.html) | 插件系统 |
| [08-commands.html](08-commands.html) | 命令系统 |
| [11-hooks.html](11-hooks.html) | Hook 机制 |

### 数据与服务
| 文件 | 内容 |
|------|------|
| [06-context-mgmt.html](06-context-mgmt.html) | 上下文管理 |
| [10-services.html](10-services.html) | 服务层 |
| [15-cost-limits.html](15-cost-limits.html) | 成本与限流 |

### 界面与配置
| 文件 | 内容 |
|------|------|
| [09-ui.html](09-ui.html) | UI 交互层 |
| [13-config.html](13-config.html) | 配置与迁移 |

### 外围能力
| 文件 | 内容 |
|------|------|
| [12-external.html](12-external.html) | 外部集成 |
| [14-native.html](14-native.html) | Native 能力 |

### 流程图
| 文件 | 内容 |
|------|------|
| [flows/query-lifecycle.html](flows/query-lifecycle.html) | 查询生命周期 |
| [flows/tool-execution.html](flows/tool-execution.html) | 工具执行流程 |
| [flows/agent-collab.html](flows/agent-collab.html) | Agent 协作流程 |

## 分析覆盖范围

- **1884 个 TypeScript 文件，512K+ 行源码**的系统性分析
- 每个模块包含：架构设计图、数据流、核心接口、设计模式、开发者指南、架构师决策指南、代码索引
- 附带垂直 Agent（客服场景）的实践借鉴，从 CC 源码提炼可复用的设计模式

## 声明

本文档仅用于技术学习和架构分析目的。源码分析基于公开泄漏的代码，所有商标和版权归 Anthropic 所有。未经授权不得用于商业用途。
