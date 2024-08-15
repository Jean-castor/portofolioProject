import {AiOutlinePhone, AiOutlineMail ,AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/informationContainer.sass';


const InformationContainer = () => {
  return (
    <section id='information'>
        <div className="info_card">
            <AiOutlinePhone id="phone_icon"/>
            <div>
                <h3>Telefone</h3>
                <p>(61) 981612009</p>
            </div>
        </div>
        <div className="info_card">
            <AiOutlineMail id="email_icon"/>
            <div>
                <h3>E-mail</h3>
                <p>jeancastor459@gmail.com</p>
            </div>
        </div>
        <div className="info_card">
            <AiFillEnvironment id="localiz_icon"/>
            <div>
                <h3>Localização</h3>
                <p>Brasília-DF</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer
