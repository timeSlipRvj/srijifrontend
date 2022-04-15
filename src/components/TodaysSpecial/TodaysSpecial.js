import React, { Component } from "react";
import styles from "./TodaysSpecial.module.css";
import TestImage from "../../images/testimage1.jpg"
import { Button } from "react-bootstrap";
import {AiFillStar} from "react-icons/ai"


class TodaysSpecial extends Component {
   render(){ return (
    <div  className={styles.TodaysSpecial}>
		<div className={styles.SpecialImagePart}>
        	<img className={styles.SpecialProductImage}
                src={TestImage} alt="specialImage"/>        
		   </div>
            <div className={styles.SpecialTextPart}>
                <div className={styles.DiscountPart}>
                    50% OFF
               </div>
               <div className={styles.CategoryName}>CATEGORY NAME</div>
                    <div className={styles.ProductName}>Product Name</div>
                    <div className={styles.ProductDesc}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum</div>
                        <div>
                           <div className={styles.Rating}>Avg Rating 4.0</div>
						<div className={styles.Price}>RS 24000/-
							<span className={styles.PrevPrice}>25000/-</span>
						</div>
        
                    </div>
                    <div className={styles.HorizontalCardButtons}>
						<Button className={styles.BuyNowButton}>BUY NOW</Button>
				   <Button className={styles.AddToCardButton}>ADD TO CART</Button>
				   
			   </div>
			   <div>
				   <div className={styles.TopReviews}>TOP REVIEWS</div>
				   <div className={styles.ReviewProfile}>
					   <img className={styles.ProfilePic} src={TestImage} alt="ProfilePic"></img>
					   <span className={styles.Name}> Mohit Goyal</span>
					   <span className={styles.Rate}> 4.0 <AiFillStar className={styles.AiFillStar}/> </span>
					   <div className={styles.ProductReview}>
					   I really loved the product. The maximum review shown should be in 2 lines only.
					   </div>
				   </div>
				   <div className={styles.ReviewProfile}>
					   <img className={styles.ProfilePic} src={TestImage} alt="ProfilePic"></img>
					   <span className={styles.Name}> Mohit Goyal</span>
					   <span className={styles.Rate}> 4.0 <AiFillStar className={styles.AiFillStar}/></span>
					   <div className={styles.ProductReview}>
					   I really loved the product. The maximum review shown should be in 2 lines only.
					   </div>
				   </div>
				   <div className={styles.ProductDetails}><Button className={styles.ProductDetailsButton}>See All product Details </Button></div>
				   
			   </div>        
                </div>
        </div>
                   
  
    )
    }
}

export default TodaysSpecial;