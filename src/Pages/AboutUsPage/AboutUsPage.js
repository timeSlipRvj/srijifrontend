import React, { Component } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./AboutUsPage.css"
import "../Tnc/Tnc.css"
import TestImage11 from "../../images/testimage11.png"
import TestImage12 from "../../images/testimage12.png"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AboutUsPage extends Component {
    render() {
        return (
            <div >
                <PageTitle />
                <div className="AboutUsPage">
                <div>
                    <div className="Head">WHY WE STARTED THIS?</div>
                    <div className="Author">BY THE REFUNDERS</div>
                    <div className="TextContent"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi. </div>
                    <div className="AuthorImagePart">
                        <img className="AuthorImage" src={TestImage11} alt="Author" />
                        <img className="AuthorImage" src={TestImage12} alt="Author" />
                        <img className="AuthorImage" src={TestImage11} alt="Author" />
                    </div>
                </div>
                <div>
                    <div className="Head">WHAT WE AIM FOR SHRIJI SHRINGAR?</div>
                    <div className="Author">BY THE REFUNDERS</div>
                    <div className="TextContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</div>
                    <Link to="/shop"><Button className="Buttons">CONTINUE SHOPPING</Button></Link>
                </div>
                <div>
                    <div className="Head">WHAT WE AIM FOR SHRIJI SHRINGAR?</div>
                    <div className="Author">BY THE REFUNDERS</div>
                    <div className="TextContent">
                    <div className="accordion">
                                <label for="acoordion1"><div>
                                    QUESTION 1</div>
                                </label>
                                <input type="checkbox" id="acoordion1" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion2"><div>
                                    QUESTION 2</div>
                                </label>
                                <input type="checkbox" id="acoordion2" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion3"><div>
                                    QUESTION 3</div>
                                </label>
                                <input type="checkbox" id="acoordion3" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion4"><div>
                                    QUESTION 4</div>
                                </label>
                                <input type="checkbox" id="acoordion4" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                    </div>
                    <Button className="Buttons">ASK QUERY</Button>
                </div>
                </div>
            </div>
            
        );
    }
}

export default AboutUsPage;
