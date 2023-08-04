/* export default function Button(props) {
    return(
        <>
        <button className="button">Button</button>
        
        <style jsx>{`
            .button {
                padding: lem;
                border-radius: 1em;
                border: none;
                background: green;
                color: white;
            }
        `}</style>
        </>
    )
}
 */


///////////////////////

import styles from '../styles/Home.module.scss'

export default function Button(props) {
    return(
        <>
        <button className={styles.button}> Button </button>
        </>
    )
}