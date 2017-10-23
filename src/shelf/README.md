# shelf
前端切图目录结构，使用gulp自动化构建工具。

# 使用：( package.jason 使用的是 淘宝镜像 cnpm的初始化 )
  1. 导入依赖包,cnpm install <br/>
  2. cnpm run dev（开发者模式）<br/>
  3. cnpm run build（打包plugins目录的文件到build.css和build.js） <br/>

# 目录解释：
  template	: 存放 html 模板文件 <br/>
  script    : 存放 逻辑 文件，你可以操作 main.js，将自动生成main.min.js <br/>
  style     : 存放 样式 文件，你可以操作 main.less 和 var.less 将自动生成 import.css <br/>
	plugins   : 插件文件，以文件夹的形式存放，jquery各个版本，请改名jquery.js，默认的jq版本为1.11.3 <br/>
	<!-- assets 	  : 静态资源（字体文件，图片文件，视频音频文件）  <br/> -->

# js 启动器
  在 html 标签上定义属性 data-app="属性值" （属性值为myApp对象执行的方法名）