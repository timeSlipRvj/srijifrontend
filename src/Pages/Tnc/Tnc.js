import React, { Component } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Tnc.css"

class Tnc extends Component {
    state = {
        body: "0"
    }
    render() {
        return (
            <div >
                <PageTitle />
                <div className="TermsAndCondition">
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet.<br></br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        nctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.<br></br> Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua.  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    </div>
                    <div>

                            <div className="accordion">
                                <label for="acoordion1"><div>
                                    Heading 1</div>
                                </label>
                                <input type="checkbox" id="acoordion1" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion2"><div>
                                    Heading 1</div>
                                </label>
                                <input type="checkbox" id="acoordion2" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion3"><div>
                                    Heading 1</div>
                                </label>
                                <input type="checkbox" id="acoordion3" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion4"><div>
                                    Heading 1</div>
                                </label>
                                <input type="checkbox" id="acoordion4" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion5"><div>
                                    Heading 1</div>
                                </label>
                                <input type="checkbox" id="acoordion5" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>
                            <div className="accordion">
                                <label for="acoordion6"><div>
                                    Heading 1</div>
                                </label>
                                <input type="checkbox" id="acoordion6" />
                                <p className="single-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio reprehenderit, hic aspernatur. Voluptates, maiores. Sequi, suscipit reiciendis saepe unde architecto qui maiores, deserunt ducimus perferendis hic. Eveniet nemo fugiat consequuntur, autem laboriosam repudiandae asperiores enim nihil ullam odit dolore similique cumque, cum quae itaque iste ipsa? Quidem, ut voluptatibus quasi.</p>
                            </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Tnc;
