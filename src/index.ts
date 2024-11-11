import
{
    PlaydateColor,
    PlaydateDrawMode,
    PlaydateFontVariant,
} from "@crankscript/core";

function getSizeDummy0(): [number, number] { return [167, 20] }
function getSizeDummy1(): LuaMultiReturn<[number, number]> { return [167, 20] }
function getSizeDummy2() { return $multi(167, 20) }

const helloString = "Hello from crankscript";
const [width, height] = playdate.graphics.getTextSize(helloString)
// console.log(playdate.graphics.getTextSize(helloString))
// let result;
// result = playdate.graphics.getTextSize(helloString)
// console.log(result)
// result = playdate.graphics.getTextSize(helloString)
// console.log(result)
// console.log(playdate.graphics.getTextSize(helloString))
// const [width, height] = [167, 20]
let [width0, height0] = getSizeDummy0()
let [width1, height1] = getSizeDummy1()
let [width2, height2] = getSizeDummy2()

playdate.update = () =>
{
    playdate.graphics.clear(PlaydateColor.Black);
    playdate.graphics.setFont(
        playdate.graphics.getSystemFont(PlaydateFontVariant.Bold),
    );
    playdate.graphics.setImageDrawMode(PlaydateDrawMode.FillWhite);
    playdate.graphics.drawText(
        helloString,
        (400 - width) / 2,
        (240 - height) / 2,
    );
};
