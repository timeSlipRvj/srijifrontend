import React, { Component } from "react";
import styles from "./CalendarComponents.module.css";
import TestImage3 from "../../images/testimage3.jpg"
import {AiOutlineDownload} from "react-icons/ai"

class CalendarComponents extends Component {
   render(){ return (
       <div className={styles.CalendarComponents}>
           <div className={styles.MonthImage}>
               <img className={styles.CalendarImage} src={TestImage3} alt="CalendarImage" />
               <AiOutlineDownload className={ styles.DowloadIcon}/>
           </div>
           <div className={styles.JustContent}>
           <div className={styles.ImportantDays}>
                <div id={styles.ImportantDays}>IMPORTANT DAYS</div>
               <div id={styles.FestiveMonth}>MONTH</div>
               <div className={styles.FestiveDays}>
                    <span>1st JANUARY</span>
                    <span>Some Festival</span>
                    <span>Explanation in one line</span>
               </div>
               <div className={styles.FestiveDays}>
                    <span>1st JANUARY</span>
                    <span>Some Festival</span>
                    <span>Explanation in one line</span>
               </div>
               <div className={styles.FestiveDays}>
                    <span>1st JANUARY</span>
                    <span>Some Festival</span>
                    <span>Explanation in one line</span>
               </div>
           </div>
           <div className={styles.MonthInfo}>EXTRA INFORMATION OF MONTH</div>
           <div className={styles.ExtraInfoContent}>
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
               erat, sed diam voluptua. At vero eos et accusam et justo duo
               dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
               consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
               labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
               accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
               sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
               sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
               ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
               accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
               sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
               sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
               labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
               et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
               sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
               magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
               dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
               Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
               elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
               sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
               </div>
               </div>
        </div>
    )
    }
}

export default CalendarComponents;