import React, { useEffect } from 'react'
import styles from './btncss.module.css'
import { Link, useNavigate} from 'react-router-dom'

const ExploreBtn = ({ title,onClick,pricingRef}) => {
    
    
    
    return (
        /* From Uiverse.io by vinodjangid07 */
        /* From Uiverse.io by mobinkakei */
        <span onClick={()=>onClick(pricingRef)} className={styles.animatedbutton}  >
            <span>{title ? title : "Explore"}</span>
            <span ></span>
        </span>



    )
}

export default ExploreBtn