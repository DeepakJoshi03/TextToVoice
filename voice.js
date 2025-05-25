let speech =new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector("select");
function filterVoicesByLanguage(lang) {
    return voices.filter(voice => voice.lang.startsWith(lang));
}
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
      let hindiVoices = filterVoicesByLanguage('hi-IN');
    let tamilVoices = filterVoicesByLanguage('ta-IN');
    voices = [...voices, ...hindiVoices, ...tamilVoices];
    speech.voice=voices[0];
     voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)));
     
    };
voiceSelect.addEventListener("change",()=>{
speech.voice=voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
