const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="29px"> 
![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)
- 🏦 I'm currently working for a healthcare based startup where i make financial applications using spring boot and mysql 
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 🤔 I use daily \`\`\`.java\`\`\`,\`\`\` .py\`\`\`, \`\`\`.sql\`\`\`
- 🌱 I’m currently learning docker and kubernetes
- 💬 Talk to me about cricket, python (both of these are not any kind of insect or animals) and silicon valley
- 😄 Pronouns: He/His/Him
- 📝 I regulary write articles on [blogger](https://apoorvtyagi133.blogspot.com/)
- 👯 We can connect on [Chess.com](https://www.chess.com/member/sweetxcyanide)♟ to play some games
- ⚡ Fun fact: Je connais un peu le français



<p align="left">
<img src="https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg" alt="java" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="55" height="60"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original-wordmark.svg" alt="python" width="60" height="60"/>
<img src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg" alt="docker" width="45" height="40"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/c/c-original.svg" alt="c" width="40" height="40"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="GIT" width="45" height="45"/> 
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/jupyter-notebook/jupyter-notebook.png" alt="IPYNB" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/maven/maven.png" alt="MAVEN" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain.svg" alt="HEROKU" width="35" height="35"/> 
</p>


![Apoorv's github stats](https://github-readme-stats.vercel.app/api?username=apoorvtyagi&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=["stars"])
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=apoorvtyagi&layout=compact&text_color=daf7dc&bg_color=151515)](https://github.com/anuraghazra/github-readme-stats)

<a href="https://twitter.com/apoorv__tyagi" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="apoorv__tyagi" height="20" width="20" /></a>&nbsp;
<a href="https://linkedin.com/in/apoorvtyagi" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="apoorvtyagi" height="20" width="20" /></a>&nbsp;
<a href="https://medium.com/@apoorvtyagi" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/medium.svg" alt="apoorvtyagi" height="20" width="20" /></a>
<a href="https://www.buymeacoffee.com/apoorvtyagi"><img align="center" alt="Buy me a Coffee" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/buymeacoffee.svg" /></a>

<!--START_SECTION:activity-->

<!--END_SECTION:activity-->


<!--START_SECTION:waka-->

<!--END_SECTION:waka-->
---

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}


`

console.log(readme)