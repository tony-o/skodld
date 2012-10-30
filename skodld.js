var ld = function(src,tgt,debug){
  debug = debug ? debug : false;
  if(src.length == 0){
    return tgt.length;
  }else if(tgt.length == 0){
    return src.length;
  }
  var score = [];
  var sdump = function(){
    if(!debug){ return; }
    if(typeof debug === "function"){
      debug(score);
      return;
    }
    var buffer = "\t\t";
    for(var q in src){
      buffer += src[q] + "\t";
    };
    console.log(buffer);
    buffer = "\t";
    for(var j in score[0]){ buffer += score[0][j] + "\t"; }
    console.log(buffer);
    for(var q in tgt){
      buffer = tgt[q] + "\t";
      for(var u in score[parseInt(q)+1]){
        buffer += score[parseInt(q)+1][u] + "\t";
      }
      console.log(buffer);
    }
    buffer = "\t";
    for(var j in score[tgt.length+1]){ buffer += score[tgt.length+1][j] + "\t"; }
    console.log(buffer);
  };
  for(var j = 0; j < src.length + 2; j++){
    score.push(new Array(tgt.length+2));
  }
  var INF = tgt.length + src.length;
  var sd = {};
  score[0][0] = INF;
  sdump();
  for(var i = 0; i <= src.length; i++){ 
    score[i+1][1] = i;
    score[i+1][0] = INF;
    if(src.length > i){
      sd[src[i]] = 0;
    }
  }
  for(var i = 0; i <= src.length; i++){ 
    score[1][i+1] = i;
    score[0][i+1] = INF;
    if(tgt.length > i){
      sd[tgt[i]] = 0;
    }
  }
  sdump();
  for(var i = 1; i <= src.length; i++){
    var db = 0;
    for(var j = 1; j <= tgt.length; j++){
      var i1 = sd[tgt[j-1]];
      var j1 = db;
      if(src[i-1] == tgt[j-1]){
        score[i+1][j+1] = score[i][j];
        db = j;
      }else{
        score[i+1][j+1] = Math.min(score[i][j],Math.min(score[i+1][j],score[i][j+1])) + 1;
      }
      score[i+1][j+1] = Math.min(score[i+1][j+1],score[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1));
    }
    sd[src[i-1]] = i;
    sdump();
  }
  return score[src.length+1][tgt.length+1];
};

module.exports = ld;
