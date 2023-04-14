import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function CoachItem(){
    return(
        <article className="coach-item">
                <header>
                    <img src="https://www.bing.com/images/search?view=detailV2&ccid=uW4diYUn&id=B5EC44E0FE2B51BBEE3033534D57209894918C76&thid=OIP.uW4diYUncZvsq0DJJC1DvQHaFj&mediaurl=https%3a%2f%2fmobimg.b-cdn.net%2fpic%2fv2%2fgallery%2fpreview%2fgory-pejzazh-priroda-46792.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b96e1d898527719becab40c9242d43bd%3frik%3ddoyRlJggV01TMw%26pid%3dImgRaw%26r%3d0&exph=700&expw=933&q=Imagem&simid=608053454164812296&FORM=IRPRST&ck=53D633485AB8CC21DD773517A45CD0A3&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0" alt="Imagem de pasiagem" />
                    <div>
                    <strong>Teste de novo professor</strong>
                    <span>Materia </span>
                    </div>
                </header>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aut perferendis illum facilis nam sunt eos non enim, beatae minus, libero laudantium repudiandae adipisci explicabo. In voluptatibus maxime asperiores sint!
                </p>
                <footer>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whathssap" />
                        Entrar em contato.
                    </button>
                </footer>
            </article>
    );
}
export default CoachItem;