


const Advert = () => {
  const advertList = [
    { title:1,imgUrl:`https://huang-1234.github.io/images/CSS/box.assets/boxmodel-(3).png`},
    { title:1,imgUrl:`https://huang-1234.github.io/images/CSS/box.assets/image-20210323175451998.png`},
    { title:1,imgUrl:`https://huang-1234.github.io/images/Browser/bRenderEngine.assets/internetCSS01.png`},
    { title:1,imgUrl:`https://huang-1234.github.io/images/Browser/bRenderEngine.assets/20180628164455807`},
  ]
  const advertListNodes = advertList.map((item) => {
    const random = item.imgUrl + (new Date().toDateString);
    return (
      <div key={random}>
        <span>{ item.title}</span>
        <img src={item.imgUrl} width="100%" />
      </div>
    )
  })
  return (
    <div className="ad-div comm-box">
      {advertListNodes}
    </div>
  )
}

export default Advert;