#include <IRremote.h>
//IR LED must be connected to Arduino PWM pin 3.
IRsend irsend;
/*"power","volumeUp","volumeDown","mute","arrowUp","arrowDown","arrowLeft","arrowRight","enter","return","display","onScreen","option","bluRay","tv","cd","radio","sleep","movie","music","enhancer","decode","straight","pure","tuner","fm","am","info","memory","presetUp","presetDown","tuningUp","tunningDown","multi","dock","phono","av1","av2","av3","av4","av5","av6","audio1","audio2","hdmi1","hdmi2","hdmi3","hdmi4","hdmi5","vAux","rec","stop","pause","play","fastForward","backForward","next","previous","1","2","3","4","5","6","7","8","9","0","+10","ent"*/
const long irCodes[] = {0x7E8154AB, 0x5EA158A7, 0x5EA1D827, 0x5EA138C7, 0x5EA1B946, 0x5EA139C6, 0x5EA1F906, 0x5EA17986, 0x5EA17B84, 0x5EA155AA, 0xFE8006F9, 0x5EA121DE, 0x5EA1D628, 0x5EA100FE, 0x5EA1C03E, 0x5EA1609E, 0x5EA1906E, 0x5EA10CF3, 0x5EA111EE, 0x5EA1916E, 0x5EA129D6, 0x5EA1B14E, 0x5EA16A95, 0x5EA1BB44, 0x5EA16897, 0xFE801AE4, 0xFE80AA54, 0x5EA1E41A, 0xFE80E618, 0xFE80DA24, 0xFE807A84, 0xFE808678, 0xFE8026D8, 0x5EA1E11E, 0xFE8052AD, 0x5EA128D7, 0x5EA1CA34, 0x5EA16A94, 0x5EA19A64, 0x5EA13AC4, 0x5EA1FA04, 0x5EA146B8, 0x5EA1A658, 0x5EA116E8, 0x5EA1E21C, 0x5EA152AC, 0x5EA1B24C, 0x5EA10AF4, 0x5EA10EF0, 0x5EA1CE30, 0xFE806699, 0xFE809669, 0xFE80E619, 0xFE8016E9, 0xFE80D629, 0xFE8056A9, 0xFE80B649, 0xFE8036C9, 0xFE808A75, 0xFE804AB5, 0xFE80CA35, 0xFE802AD5, 0xFE80AA55, 0xFE806A95, 0xFE80EA15, 0xFE801AE5, 0xFE809A65, 0xFE805AA5, 0xFE80DA25, 0xFE803AC5}; 
String inputString = "";         // a string to hold incoming data
boolean turnOn = false;
boolean initialized=false;
void setup(){
  Serial.begin(115200);
  // initialize the relay pin as an output:
  inputString.reserve(200);  // reserve 200 bytes for the inputString:
}
void processIR(){
    int irCode_index =-1; 
    for (int ii = 0; ii < 69; ii++){
      char buff[20];
      inputString.toCharArray(buff, sizeof(buff));
      unsigned long code = strtoul(buff,0,16);
      if(code == irCodes[ii]){
        irCode_index=ii;
      }
    }
    //close yamaha receiver
    if(inputString.equals("powerIR")){
      irsend.sendNEC(irCodes[0], 32);
    }
    if(irCode_index!=-1){
      irsend.sendNEC(irCodes[irCode_index], 32);
    }
    irCode_index=-1;
    //delay(500);
    inputString = "";   // clear the string:
}
void loop() {
   if(!initialized){
    Serial.println("ready");
    initialized=true;
  }
}
/*
  SerialEvent occurs whenever a new data comes in the
 hardware serial RX.  This routine is run between each
 time loop() runs, so using delay inside loop can delay
 response.  Multiple bytes of data may be available.
 */
void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read(); 
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      processIR();
    } 
  }
}
