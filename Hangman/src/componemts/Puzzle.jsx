import { useState } from "react"
import GuessedLetter from "./GuessedLetters"

function Puzzle({word}) {

    const [word_display, setWord_display] = useState(()=> {   
            let og =[]
            for( let i = 0; i < word.length; i++) {

                og.push("_")
            }
            og=og.join(' ')
            return og
        })
    // let newData = [...word_display, og]
    // setWord_display(newData)
    // console.log()
    // word_display=word_display.join(' ')
    // console.log(word_display)
    console.log(word)
    
    const [wrong, setWrong] = useState([])
    const getGuess = ()=>{
        let wrong_display=[]
        let guess=document.getElementById('guess').value
        console.log(guess)
        console.log(word.indexOf(guess))
        if (word.indexOf(guess) >= 0) {
            let word_a=word_display
            for(let i=0; i < word.length; i++){
                if (word[i]=== guess) {
                    word_a=word_a.split(" ")
                    word_a[i]=guess
                    word_a=word_a.join(" ")
                    console.log(word_a)
                    // setWord_display(word_a)
                }
            }
            setWord_display(word_a)
        } else {
            alert("Try Again")
            wrong_display.push(guess)
            setWrong([...wrong, wrong_display])
            console.log(wrong)
        }

    }
    return (
        <div>
            <h1>{word_display}</h1>
            <input id='guess' name='guess' type="text"/>
            <input onClick={getGuess} type="submit"/>
            <ul> <h3>Wrong Letters:</h3>
                {wrong.map((ltr)=>
                <li>{ltr}</li>
                )}
            </ul>
            
           
        </div>
    
    )
}

export default Puzzle