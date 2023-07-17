import Title from "../components/title/title.component";
import { useState } from "react";
import "./e-signature.styles.scss"

const EsignatureApp = () => {

    const [name, setName] = useState();
    const [date, setDate] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

  return (
    <div className={"e-signature-app-container"}>
    <Title classes={"title"} text={!name ? "Your signature" : name }/>
    <Title classes={"sub-title"} text={!date ? "DoB" : date}/>

    <p className="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolores sint a! Enim libero deserunt in, eos id fugiat nesciunt voluptatem corporis asperiores, voluptates quidem beatae quisquam velit, unde earum! Non alias, praesentium qui ea omnis deserunt asperiores! Veritatis laborum quibusdam commodi iure quos ipsam in tempore quae non ab mollitia, ratione vitae, enim fugiat eum repellat, voluptatem laudantium ipsum deserunt ipsa autem magnam? Cupiditate minus ex ipsa quae, quibusdam molestias doloribus quaerat pariatur atque ut sint debitis ducimus quod. Ducimus magni facilis dolorum eius quod, alias cum error iure quibusdam nostrum, exercitationem, aperiam accusamus? Ducimus unde deserunt illum mollitia!
    </p>

    <footer className={"footer-container"}>
        <input type="date" value={date} className="date" onChange={handleDateChange}/>
        <input type="text" value={name} className="name" onChange={handleNameChange}/>
    </footer>
    </div>
  )
}

export default EsignatureApp;