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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ornare consequat. Vestibulum dignissim aliquam magna,
                        sed elementum diam rutrum non. Nullam quis nisi ac dolor sollicitudin pellentesque. In pharetra, sapien non pellentesque
                        feugiat, ligula est dictum libero, at blandit magna massa eget ligula. Nullam hendrerit est eget blandit laoreet. Sed
                        vulputate urna dui, nec convallis augue rutrum ac. Integer nec justo et nunc viverra porttitor. Maecenas nulla elit,
                        hendrerit vel bibendum vestibulum, venenatis et velit. Pellentesque ex neque, egestas in urna eu, dictum tempor diam.
                        Sed convallis gravida dui in bibendum. Praesent a commodo tellus.
                    </p>
                </div>


                <div className="article-container">
                    <h3 className="article-title" >
                        What is the 20-20-20 Rule?
                    </h3>

                    <p className="article-content">
                        Curabitur ut eros vel sapien efficitur interdum id a magna. Suspendisse at vehicula metus. In non ex diam.
                        Suspendisse rutrum, velit a molestie rhoncus, erat nunc pretium metus, at pretium nibh tellus sit amet arcu.
                        Nullam eget nulla sed ante scelerisque maximus tempor malesuada nisl. Nam non augue non urna molestie accumsan.
                        Curabitur ultrices sed nulla ac maximus. Sed eu velit id urna convallis iaculis non in mauris. Aenean sit amet imperdiet
                        augue. Cras at vulputate ex, ut volutpat dui. Nullam sed posuere dolor. Vestibulum congue nunc lacinia suscipit tincidunt.
                        Sed condimentum quam eu purus ultricies, vitae porttitor augue tristique. Vestibulum efficitur ex sed enim dictum hendrerit.
                        Integer luctus leo nisl, eu tincidunt metus rhoncus vitae.
                    </p>
                </div>


                <div className="article-container">
                    <h3 className="article-title">
                        Other ways to reduce digital eyestrain
                    </h3>

                    <p className="article-content">
                        Fusce consectetur fringilla tincidunt. Pellentesque laoreet venenatis eros, id elementum lacus sollicitudin a.
                        Suspendisse fermentum mi at leo condimentum vestibulum. Suspendisse et tortor et ipsum viverra dapibus non a diam.
                        Suspendisse a blandit orci. Etiam in odio in nulla aliquet placerat. Sed tincidunt ipsum sed risus dictum, eget rhoncus
                        urna rutrum. Sed enim orci, sodales at elit sed, vehicula aliquet urna. Suspendisse aliquet, ipsum non dapibus consectetur,
                        purus libero interdum ex, vitae placerat metus sem sit amet tellus. Quisque interdum accumsan ante, et lobortis velit efficitur ut.
                    </p>
                </div>
            </div>

        </>
    )
}


export default Information