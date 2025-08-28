import { SafeAreaPatch } from 'safe-area-patch';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    SafeAreaPatch.echo({ value: inputValue })
}
