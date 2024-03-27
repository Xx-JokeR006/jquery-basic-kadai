$(window).on('load',function() {
    //HTMLドキュメントが読み込み完了した時に
    console.log('loadイベントが発生しました');
});
    //画面スクロールした時に
    $(window).on('scroll',function() {
        console.log('scrollイベントが発生しました');
    });
