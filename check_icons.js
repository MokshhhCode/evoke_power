const names = [
  'House', 'Office building', 'High voltage', 'Rocket', 'Motorway', 'Factory',
  'Shopping bags', 'Houses', 'Fuel pump', 'Fork and knife with plate', 'Bed',
  'Trophy', 'Alarm clock', 'Shield', 'Money bag', 'Hammer and wrench', 'Check mark button'
];

async function check() {
  for (const name of names) {
    const url = encodeURI(`https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/${name}/3D/${name.toLowerCase().replace(/ /g, '_')}_3d.png`);
    const res = await fetch(url, { method: 'HEAD' });
    console.log(name, res.status === 200 ? 'OK' : 'FAIL');
  }
}
check();
