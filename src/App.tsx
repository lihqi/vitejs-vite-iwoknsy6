import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MarkdownView } from './md'

const testMDString = `# 标题一
## 标题二
**加粗**
*斜体*
&lt;u&gt;下划线&lt;/u&gt;
~~删除线~~


----
分割线


1. 第一项
* 元素1
* 元素2
2. 第二项
* 元素1
* 元素2
&gt;   最外层
&gt; &gt;   一层嵌套
&gt; &gt; &gt;   二层嵌套

&gt; 区块中使用列表
&gt; 1. 第一项
&gt; 2. 第二项
&gt; + 第一项
&gt; + 第二项


用 1 作为网址变量 [baidu][1] ,然后在文档的结尾为变量赋值（网址）

[1]: https://baidu.com

1:点 \( O \) 是直线 \( AB \) 上一点，\(\angle 1 = 65^\circ\)，则 \(\angle 2\) 的度数。

2:如图，已知点 \\( O \\) 是直线 \\( AB \\) 上一点，\\( \\angle 1 = 65^\\circ \\)，则 \\( \\angle 2 \\) 的度数

3:如图，已知点$ O $ 是直线 $ AB$ 上一点，$ angle 1 = 65^circ $，则 $angle 2$的度数

666666`

function App() {


  return (
    <>
      <div>
      <MarkdownView value={testMDString} />
      </div>

    </>
  )
}

export default App
