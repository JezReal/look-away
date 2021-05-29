import "./Information.css"
import Header from "../../components/Header/Header";

const Information = () => {
    return (
        <>
            <Header/>
            <div id="content-container">

                <div className="article-container">
                    <h3 className="article-title" id="first-item">
                        What is "Look Away"?
                    </h3>

                    <p className="article-content">
                        As everyone is now working or learning from home, the time that we spend staring at screens have been greater than ever.
                        Naturally, this comes with it a lot of potential problems. One of these is digital eye strain. <a href="https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome?sso=y" target="_blank" rel="noreferrer">Digital eye strain</a>
                        describes a group of eye and vision-related problems that arise from prolonged use of digital devices.
                        With this, we thought of creating a web app that can help in minimizing digital eye strain which gave birth to look away.
                    </p>
                </div>


                <div className="article-container">
                    <h3 className="article-title" >
                        What is the 20-20-20 Rule?
                    </h3>

                    <p className="article-content">
                        According to <a href="https://www.healthline.com/health/eye-health/20-20-20-rule" target="_blank" rel="noreferrer">healthline.com</a>, 20-20-20 rule is a general rule that you can follow if you find yourself staring at screens for a really long period of time.
                        The general idea is that for every 20 minutes you spend staring at a screen, you should try to look away at something 20 feet away for 20 seconds.
                        How are you going to look at something 20 feet away? Well, you shouldn't be exact with the measurement the key is to look at something
                        that is far away from you. Finally, the reason for 20 seconds is that it takes about 20 seconds for your eyes to completely relax.
                    </p>
                </div>


                <div className="article-container">
                    <h3 className="article-title">
                        Other ways to reduce digital eyestrain
                    </h3>

                    <p className="article-content">
                        Aside from following the 20-20-20 rule, there are other ways we can reduce digital eye strain one of them is adjusting your
                        computer display settings such as brightness, text size, contrast and color temperature. Another way is to use computer glasses
                        and/or using eye drops. Finally, you can also blink more often when looking at a screen because it helps moisten your eyes to
                        prevent dryness and irritation.
                    </p>
                </div>
            </div>

        </>
    )
}


export default Information