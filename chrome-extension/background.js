// 点击图标时自动打开侧边栏
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

// 安装时默认打开
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({ enabled: true });
});
