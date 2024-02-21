const Investments = () => (
    <div
      style={{
        margin: 50,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
         <iframe
            src="https://pt.widgets.investing.com/top-cryptocurrencies?theme=darkTheme&cols=symbol,priceUsd,priceBtc,chg24,chg7"
            width="317"
            height="467"
            frameborder="0"
            allowtransparency="true"
            marginwidth="0"
            marginheight="0"
          ></iframe>
      <iframe
        src="https://ssltsw.investing.com?lang=50&forex=1,9,2,6,10,2103,37&commodities=8833,8849,8862,8830,8836,8832,8918&indices=172,175,174,166,179,178,27&stocks=474,345,346,347,348,349,350&tabs=1,2,3,4"
        width="317"
        height="467"
      ></iframe>
      

      
    </div>
  );
  
  export default Investments;