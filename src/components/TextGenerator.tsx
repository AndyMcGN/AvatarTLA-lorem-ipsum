import React from 'react';
import { random, names, animals } from '../words';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faClipboard } from '@fortawesome/free-solid-svg-icons';


interface Props {
    paragraphs: number,
}

const TextGenerator: React.FC<Props> = (props) => {

    const [generatedText, setGeneratedText] = useState(['']);

    const wordsArray:Array<string> = random.concat(animals).concat(names);


    useEffect(() => {

        const allParagraphs = makeAllParagraphs();
        setGeneratedText(allParagraphs);

    }, [props.paragraphs]);

    const makeAllParagraphs = () => {

        const paragraphs:string[] = [];
        for (let i = 0; i < props.paragraphs; i++) {
            const paragraph = makeParagraph();
            paragraphs.push(paragraph);
        }

        return paragraphs;
    }

    const makeParagraph = () => {
        const paragraph: string[] = [];
        for (let j = 0; j < 40; j++) {
            let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
            paragraph.push(word);
        }
        return paragraph.join(' ');
    }

    const mappedText = generatedText.map(paragraph => (<p>{paragraph}</p>));

    const copyText = () => {
        const selectableText = document.createElement('textarea')
        document.body.appendChild(selectableText);
        selectableText.value = generatedText.join('\n');
        selectableText.select();
        document.execCommand("copy");
        document.body.removeChild(selectableText);
    
    }

    return (
        <div className="generatedText">
            {mappedText}
            {props.paragraphs > 0 && <button onClick={() => {copyText()}}><FontAwesomeIcon icon={faClipboard} size='lg'/>Copy text</button>}
        </div>
    )
}

export default TextGenerator;