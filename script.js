// 1. DATA JADWAL JUMAT (JAN - DES)
const tableJumatData = [
    { no: 1, k: "Drs. AHMAD JAELANI, MM", m: "NANA", mu: "DODI ALFATAH", j: ["2","6","6","3","1","5","3","7","4","2","6","4"] },
    { no: 2, k: "KH. ASEP SYARIF", m: "MOH. MAHMUD", mu: "ASEP SAEFULLOH", j: ["9/30","13","13","10","8/29","12","10/31","14","11","9/30","13","11"] },
    { no: 3, k: "UST. OMAY KOMARUDIN", m: "UDIN JAENUDIN", mu: "DODI ALFATAH", j: ["16","20","20","17","15","19","17","21","18","16","20","18"] },
    { no: 4, k: "UST. NURJEN JAELANI", m: "MUHYIDIN", mu: "UDIN JAENUDIN", j: ["23","27","27","24","22","26","24","28","25","23","27","25"] }
];

// 2. FUNGSI BELAJAR (LANGSUNG AKTIF)
function learnLang(lang) {
    const box = document.getElementById('ai-response');
    const teks = {
        'Sunda': "Sampurasun! Ari jadwal pangaosan dinten ayeuna tabuh sabaraha?",
        'Jawa': "Sugeng enjang! Jadwal pengajian dinten niki jam pinten nggih?",
        'Inggris': "Excuse me, what time is the recitation schedule for today?",
        'Arab': "Assalamu'alaikum. Mata jadwalul muhadharah li hadzal yawm?"
    };
    box.innerHTML = `<p class="text-emerald-600 dark:text-emerald-400 font-bold">${teks[lang]}</p>`;
}

// 3. CCTV (8 KAMERA - DEEP LINK)
const cctvList = document.getElementById('cctv-list');
if(cctvList) {
    cctvList.innerHTML = [1,2,3,4,5,6,7,8].map(i => `
        <div class="glass p-3 rounded-xl flex items-center justify-between border dark:border-slate-800">
            <span class="font-bold dark:text-white text-sm">Kamera ${i}</span>
            <a href="vlc://rtsp://admin:Admin12345@192.168.1.42:554/ch${i}" 
               class="bg-emerald-600 text-white px-3 py-1 rounded-lg text-[10px] font-black shadow-lg">BUKA VLC</a>
        </div>
    `).join('');
}