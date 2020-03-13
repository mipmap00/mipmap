const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: 'BATTLEGROUND &#40;大便&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/BATTLEGROUND%20%28%E5%A4%A7%E4%BE%BF%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: "CHILLIN' &#40;围棋AI&#41;",
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/CHILLIN%27%20%28%E5%9B%B4%E6%A3%8BAI%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'CUT OFF &#40;奶粉&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/CUT%20OFF%20%28%E5%A5%B6%E7%B2%89%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Cold Everywhere&#40;调度列车&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Cold%20Everywhere%EF%BC%88%E8%B0%83%E5%BA%A6%E5%88%97%E8%BD%A6%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'DARKVIBE &#40;戒毒&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/DARKVIBE%20%28%E6%88%92%E6%AF%92%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'DR!FT &#40;漂移&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/DR%21FT%20%28%E6%BC%82%E7%A7%BB%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'DRUNK &#40;电动汽车&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/DRUNK%20%28%E7%94%B5%E5%8A%A8%E6%B1%BD%E8%BD%A6%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: '	DSL &#40;双眼皮&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/DSL%20%28%E5%8F%8C%E7%9C%BC%E7%9A%AE%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Depressed&#40;实拍&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Depressed%EF%BC%88%E5%AE%9E%E6%8B%8D%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'EndOfWorld&#40;原子弹&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/EndOfWorld%EF%BC%88%E5%8E%9F%E5%AD%90%E5%BC%B9%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'FeelLIKETHIS&#40;行道树&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/FeelLIKETHIS%EF%BC%88%E8%A1%8C%E9%81%93%E6%A0%91%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'FuManchu&#40;近视眼手术&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/FuManchu%EF%BC%88%E8%BF%91%E8%A7%86%E7%9C%BC%E6%89%8B%E6%9C%AF%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Good Vibe&#40;电销机器人&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Good%20Vibe%EF%BC%88%E7%94%B5%E9%94%80%E6%9C%BA%E5%99%A8%E4%BA%BA%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'H!ghT!me &#40;机票&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/H%21ghT%21me%20%28%E6%9C%BA%E7%A5%A8%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'HIGHTECH &#40;显示器PART1&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Hustla%20Flow%20%EF%BC%88%E4%B8%89%E7%BB%B4%E6%A8%A1%E5%9E%8BPart2%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Hustla Flow &#40;三维模型Part2&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Hustla%20Flow%20%EF%BC%88%E4%B8%89%E7%BB%B4%E6%A8%A1%E5%9E%8BPart2%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'I got a A !&#40;奔驰&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/I%20got%20a%20A%20%21%EF%BC%88%E5%A5%94%E9%A9%B0%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'ILLILL &#40;显示器PART2&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/ILLILL%20%28%E6%98%BE%E7%A4%BA%E5%99%A8PART2%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: '	Ice On me&#40;钻石&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Ice%20On%20me%EF%BC%88%E9%92%BB%E7%9F%B3%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: "ItWon'tEnd &#40;牛排&#41;",
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/ItWon%27tEnd%20%28%E7%89%9B%E6%8E%92%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'JAILTIME &#40;监狱&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/JAILTIME%20%28%E7%9B%91%E7%8B%B1%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'JAMECA TIME&#40;香蕉&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/JAMECA%20TIME%EF%BC%88%E9%A6%99%E8%95%89%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'JingYong&#40;快递&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/JingYong%EF%BC%88%E5%BF%AB%E9%80%92%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'LIES ON ME &#40;低焦油香烟骗局&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/LIES%20ON%20ME%20%28%E4%BD%8E%E7%84%A6%E6%B2%B9%E9%A6%99%E7%83%9F%E9%AA%97%E5%B1%80%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Lights On&#40;路灯&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Lights%20On%EF%BC%88%E8%B7%AF%E7%81%AF%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'MOTHERLAND &#40;火力发电&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/MOTHERLAND%20%28%E7%81%AB%E5%8A%9B%E5%8F%91%E7%94%B5%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Mood Rise &#40;手机怎么上网5G&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Mood%20Rise%20%EF%BC%88%E6%89%8B%E6%9C%BA%E6%80%8E%E4%B9%88%E4%B8%8A%E7%BD%915G%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'NOTHIN‘2LOSE &#40;高速公路&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/NOTHIN%E2%80%982LOSE%20%28%E9%AB%98%E9%80%9F%E5%85%AC%E8%B7%AF%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Okay &#40;三维模型&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Okay%20%28%E4%B8%89%E7%BB%B4%E6%A8%A1%E5%9E%8B%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'RIOTinMyMind &#40;手机定位&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/RIOTinMyMind%20%28%E6%89%8B%E6%9C%BA%E5%AE%9A%E4%BD%8D%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }]
    {
        name: 'Race&#40;鸡爪2&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Race%EF%BC%88%E9%B8%A1%E7%88%AA2%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Rest in heaven&#40;抗癌药&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Rest%20in%20heaven%EF%BC%88%E6%8A%97%E7%99%8C%E8%8D%AF%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'River &#40;宠物&#41;.',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/River%20%28%E5%AE%A0%E7%89%A9%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Rollin Stone &#40;ATM&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Rollin%20Stone%20%28ATM%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'SLUMPPARTY &#40;违章&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/SLUMPPARTY%20%28%E8%BF%9D%E7%AB%A0%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'SWEETMURDA &#40;护肤品&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/SWEETMURDA%20%28%E6%8A%A4%E8%82%A4%E5%93%81%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Slave Song&#40;暖气&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Slave%20Song%EF%BC%88%E6%9A%96%E6%B0%94%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Under control&#40;大数据&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Under%20control%EF%BC%88%E5%A4%A7%E6%95%B0%E6%8D%AE%EF%BC%89.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'WENGWENG &#40;引擎&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/WENGWENG%20%28%E5%BC%95%E6%93%8E%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }
    {
        name: 'Western Bae&#40;三维模型Part3&#41;',
        artist: 'artist',
        url: 'http://q73thzmcp.bkt.clouddn.com/Western%20Bae%EF%BC%88%E4%B8%89%E7%BB%B4%E6%A8%A1%E5%9E%8BPart3%29.flac',
        cover: 'http://q73thzmcp.bkt.clouddn.com/%E5%9B%9E%E5%BD%A2%E9%92%88.jpg',
    }]
});