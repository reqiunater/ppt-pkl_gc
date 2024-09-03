window.WebFontConfig = {
  google: {
    families: ['Press Start 2P'],
  },
  active() {
    init();
  },
};

(function () {
  const wf = document.createElement('script');
  wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
  wf.type = 'text/javascript';
  wf.async = 'true';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

const app = new PIXI.Application();


async function setup() {
  await app.init({ background: '#ffffff', resizeTo: window });
  document.body.appendChild(app.canvas);

  const judul = new PIXI.Text({
    text: "Laporan Praktik",
    style: {
      fill: "#000000"
    }
  })
  const judul2 = new PIXI.Text({
    text: "Kerja Lapangan",
    style: {
      fill: "#000000"
    }
  })

  judul.x = app.screen.w

  const textGreat = new PIXI.Text({
    text: "Great",
    style: {
      fill: "#1D4485",
      fontFamily: "Press Start 2P",
      fontSize: 106,
    }
  });

  const textGreatTimpa = new PIXI.Text({
    text: "Great",
    style: {
      fill: "#4A86E8",
      fontFamily: "Press Start 2P",
      fontSize: 106,
    }
  });

  const textCode = new PIXI.Text({
    text: "code",
    style: {
      fill: "#212121",
      fontFamily: "Press Start 2P",
      fontSize: 106,
    }
  });

  const textCodeTimpa = new PIXI.Text({
    text: "code",
    style: {
      fill: "#444444",
      fontFamily: "Press Start 2P",
      fontSize: 106,
    }
  });

  textCode.x = app.screen.width / 1.855;
  textCode.y = app.screen.height / 2 + 10;

  textCodeTimpa.x = app.screen.width / 1.855;
  textCodeTimpa.y = app.screen.height / 2;

  textGreat.x = app.screen.width / 3.5;
  textGreat.y = app.screen.height / 2 + 12;

  textGreatTimpa.x = app.screen.width / 3.5;
  textGreatTimpa.y = app.screen.height / 2;

  textGreat.anchor.set(0.5);
  app.stage.addChild(textGreat);

  textGreatTimpa.anchor.set(0.5);
  app.stage.addChild(textGreatTimpa);

  textCode.anchor.set(0.5);
  app.stage.addChild(textCode);
  textCodeTimpa.anchor.set(0.5);
  app.stage.addChild(textCodeTimpa);
}

async function mainPage() {
  await app.init({ background: "#ffffff", resizeTo: window })
  document.body.appendChild(app.canvas);

  const greatstyle = {
    fontFamily: "Press Start 2P",
    fontSize: 106
  }
  const codestyle = {
    fontFamily: "Press Start 2P",
    fontSize: 106
  }
  const titlestyle = {
    fontFamily: "Press Start 2P",
    fill: "#000000",
    fontSize: 32
  }

  const titleTop = new PIXI.Text({
    text: "Laporan Praktik",
    style: {
      ...titlestyle
    }
  })
  const titleBottom = new PIXI.Text({
    text: "Kerja Lapangan",
    style: {
      ...titlestyle
    }
  })

  const greatTop = new PIXI.Text({
    text: "Great",
    style: {
      ...greatstyle,
      fill: "#444444"
    }
  })
  const greatBottom = new PIXI.Text({
    text: "Great",
    style: {
      ...greatstyle,
      fill: "#1D4485"
    }
  })

  const codeTop = new PIXI.Text({
    text: "code",
    style: {
      ...codestyle,
      fill: "#444444"
    }
  })
  const codeBottom = new PIXI.Text({
    text: "code",
    style: {
      ...codestyle,
      fill: "#212121"
    }
  })

  const keterangan = new PIXI.Text({
    text: "Software House",
    style: {
      fontFamily: "Press Start 2P",
      fontSize: 33,
      fill: "#888888"
    }
  })

  greatTop.anchor.set(0.5);
  app.stage.addChild(greatTop);
}

(async () => {
  // await setup();
  await mainPage();
})();
