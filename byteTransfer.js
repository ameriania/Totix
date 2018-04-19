




function byteTransfer(byte) {

    var k = 1024;

    var sizes = ['B', 'K', 'M', 'G', 'T'];

    var i = 0;

    var byteTransfered;

    if (byte === 0) {

        i=0;

    }else{

        i=Math.floor(Math.log(byte)/Math.log(k));

    }

    byteTransfered = byte/Math.pow(k,i).toFixed(1)+sizes[i];

    return byteTransfered;

}

console.log(byteTransfer(1024));