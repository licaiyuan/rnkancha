
import {
    Dimensions
} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 640
const uiWidthPx = 640;

function pxToDp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx;
}
export default pxToDp