(() =>{

  class Accordion {
    // constructorは初期化のこと
    constructor(obj){
      console.log('obj',obj);
      const $elm =document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
      const triggerLen = $trigger.length;
      let index = 0;
      while(index < triggerLen) {
        // クラス内で関数を呼び出すときはthis.関数名
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }

    // クリックしたときに実行される処理
   clickHandler(e) {
      e.preventDefault();
      // currentTargetはクリックされた要素
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      if($content.classList.contains('show') === true){
        $content.classList.remove('show');
        $target.classList.remove('unko');
      }else{
        $content.classList.add('show');
        $target.classList.add('unko');
      }
    }
  }

  const AccordionFn = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a',
  });
  
  const faqAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p',
  });
  const dlAccordion = new Accordion({
    hookName: '#js-accordion-min',
    tagName: 'dt',
  });
})();