'use strict';

var BLHELI_SILABS_ESCS = {
    '#AIK_BL_30S#':     { name: 'AIKON Boltlite 30A',         damped_enabled: 1 },
    '#MR25_15A#':       { name: 'Align MR25 15A',             damped_enabled: 1 },
    '#AlignBL15P#':     { name: 'Align RCE BL15P',            damped_enabled: 0 },
    '#AlignBL15X#':     { name: 'Align RCE BL15X',            damped_enabled: 0 },
    '#AlignBL35P#':     { name: 'Align RCE BL35P',            damped_enabled: 1 },
    '#AlignBL35X#':     { name: 'Align RCE BL35X',            damped_enabled: 1 },
    '#DALRC_XR20A#':    { name: 'DALRC XR20A',                damped_enabled: 1 },
    '#DP3A#':           { name: 'DP 3A',                      damped_enabled: 1 },
    '#DYS_XM20A#':      { name: 'DYS XM20A',                  damped_enabled: 1 },
    '#EAZY3Av2#':       { name: 'EAZY 3Av2',                  damped_enabled: 1 },
    '#EMAX20A#':        { name: 'EMAX 20A',                   damped_enabled: 1 },
    '#EMAX40A#':        { name: 'EMAX 40A',                   damped_enabled: 1 },
    '#EMAX_Ltng_20A#':  { name: 'EMAX Lightning 20A',         damped_enabled: 1 },
    '#EMAXNano20A#':    { name: 'EMAX Nano 20A',              damped_enabled: 1 },
    '#F85_3A#':         { name: 'F85 3A',                     damped_enabled: 1 },
    '#FC_Fairy_30A#':   { name: 'Flycolor Fairy 30A',         damped_enabled: 1 },
    '#FC_Fairy_6A#':    { name: 'Flycolor Fairy 6A',          damped_enabled: 0 },
    '#FC_FairyV2_30A#': { name: 'Flycolor Fairy V2 30A',      damped_enabled: 1 },
    '#FC_Raptor_20A#':  { name: 'Flycolor Raptor 20A',        damped_enabled: 1 },
    '#FC_Rapt390_20A#': { name: 'Flycolor Raptor 390 20A',    damped_enabled: 1 },
    '#FVTLibee12A#':    { name: 'FVT Littlebee 12A',          damped_enabled: 1 },
    '#FVTLibee20A#':    { name: 'FVT Littlebee 20A',          damped_enabled: 1 },
    '#FVTLibee20APro#': { name: 'FVT Littlebee 20A Pro',      damped_enabled: 1 },
    '#FVTLibee30A#':    { name: 'FVT Littlebee 30A',          damped_enabled: 1 },
    '#GauiGE18318A#':   { name: 'Gaui GE 183 18A',            damped_enabled: 0 },
    '#G_Ultra20A#':     { name: 'Graupner Ultra 20A',         damped_enabled: 1 },
    '#HiModelCool22A#': { name: 'HiModel Cool 22A',           damped_enabled: 0 },
    '#HiModelCool33A#': { name: 'HiModel Cool 33A',           damped_enabled: 0 },
    '#HiModelCool41A#': { name: 'HiModel Cool 41A',           damped_enabled: 0 },
    '#HKing10A#':       { name: 'H King 10A',                 damped_enabled: 1 },
    '#HKing20A#':       { name: 'H King 20A',                 damped_enabled: 1 },
    '#HKing35A#':       { name: 'H King 35A',                 damped_enabled: 1 },
    '#HKing50A#':       { name: 'H King 50A',                 damped_enabled: 1 },
    '#MDRX62H#':        { name: 'MDRX62H',                    damped_enabled: 0 },
    '#OvskyMR20APro#':  { name: 'Oversky MR 20A Pro',         damped_enabled: 1 },
    '#Platinum50Av3#':  { name: 'Platinum 50Av3',             damped_enabled: 1 },
    '#Platinum150A#':   { name: 'Platinum Pro 150A',          damped_enabled: 1 },
    '#PlatinumPro30A#': { name: 'Platinum Pro 30A',           damped_enabled: 1 },
    '#PolarisTdr100A#': { name: 'Polaris Thunder 100A',       damped_enabled: 0 },
    '#PolarisTdr12A#':  { name: 'Polaris Thunder 12A',        damped_enabled: 0 },
    '#PolarisTdr20A#':  { name: 'Polaris Thunder 20A',        damped_enabled: 0 },
    '#PolarisTdr30A#':  { name: 'Polaris Thunder 30A',        damped_enabled: 0 },
    '#PolarisTdr40A#':  { name: 'Polaris Thunder 40A',        damped_enabled: 0 },
    '#PolarisTdr60A#':  { name: 'Polaris Thunder 60A',        damped_enabled: 0 },
    '#PolarisTdr80A#':  { name: 'Polaris Thunder 80A',        damped_enabled: 0 },
    '#RCTimer6A#':      { name: 'RCTimer 6A',                 damped_enabled: 0 },
    '#RotorGeeks20A#':  { name: 'RotorGeeks 20A',             damped_enabled: 1 },
    '#RotorGeeks20AP#': { name: 'RotorGeeks 20A Plus',        damped_enabled: 1 },
    '#SKMonster30A#':   { name: 'Servoking Monster 30A',      damped_enabled: 1 },
    '#SkyIII30A#':      { name: 'SkyIII 30A',                 damped_enabled: 0 },
    '#Skywalker20A#':   { name: 'Skywalker 20A',              damped_enabled: 1 },
    '#Skywalker40A#':   { name: 'Skywalker 40A',              damped_enabled: 1 },
    '#Supermicro3p5A#': { name: 'Supermicro 3p5A',            damped_enabled: 1 },
    '#Tarot30A#':       { name: 'Tarot 30A',                  damped_enabled: 0 },
    '#TBSCube12A#':     { name: 'TBS Cube 12A',               damped_enabled: 1 },
    '#TurnigyAE20A#':   { name: 'Turnigy AE 20A',             damped_enabled: 0 },
    '#TurnigyAE25A#':   { name: 'Turnigy AE 25A',             damped_enabled: 0 },
    '#TurnigyAE30A#':   { name: 'Turnigy AE 30A',             damped_enabled: 0 },
    '#TurnigyAE45A#':   { name: 'Turnigy AE 45A',             damped_enabled: 1 },
    '#TgyKF120AHV#':    { name: 'Turnigy KForce 120A HV',     damped_enabled: 0 },
    '#TgyKF120AHVv2#':  { name: 'Turnigy KForce 120A HV v2',  damped_enabled: 0 },
    '#TgyKF40A#':       { name: 'Turnigy KForce 40A',         damped_enabled: 1 },
    '#TgyKF70AHV#':     { name: 'Turnigy KForce 70A HV',      damped_enabled: 0 },
    '#Turnigy10A#':     { name: 'Turnigy Plush 10A',          damped_enabled: 0 },
    '#Turnigy12A#':     { name: 'Turnigy Plush 12A',          damped_enabled: 0 },
    '#Turnigy18A#':     { name: 'Turnigy Plush 18A',          damped_enabled: 0 },
    '#Turnigy25A#':     { name: 'Turnigy Plush 25A',          damped_enabled: 0 },
    '#Turnigy30A#':     { name: 'Turnigy Plush 30A',          damped_enabled: 0 },
    '#Turnigy40A#':     { name: 'Turnigy Plush 40A',          damped_enabled: 1 },
    '#Turnigy60A#':     { name: 'Turnigy Plush 60A',          damped_enabled: 0 },
    '#Turnigy6A#':      { name: 'Turnigy Plush 6A',           damped_enabled: 0 },
    '#Turnigy80A#':     { name: 'Turnigy Plush 80A',          damped_enabled: 0 },
    '#TurnigyNfet18A#': { name: 'Turnigy Plush Nfet 18A',     damped_enabled: 1 },
    '#TurnigyNfet25A#': { name: 'Turnigy Plush Nfet 25A',     damped_enabled: 1 },
    '#TurnigyNfet30A#': { name: 'Turnigy Plush Nfet 30A',     damped_enabled: 1 },
    '#XP12A#':          { name: 'XP 12A',                     damped_enabled: 0 },
    '#XP18A#':          { name: 'XP 18A',                     damped_enabled: 0 },
    '#XP25A#':          { name: 'XP 25A',                     damped_enabled: 0 },
    '#XP35ASW#':        { name: 'XP 35A SW',                  damped_enabled: 1 },
    '#XP3A#':           { name: 'XP 3A',                      damped_enabled: 1 },
    '#XP7A#':           { name: 'XP 7A',                      damped_enabled: 0 },
    '#XP7AFast#':       { name: 'XP 7A Fast',                 damped_enabled: 1 },
    '#XRotor10A#':      { name: 'XRotor 10A',                 damped_enabled: 1 },
    '#XRotor20A#':      { name: 'XRotor 20A',                 damped_enabled: 1 },
    '#XRotor40A#':      { name: 'XRotor 40A',                 damped_enabled: 1 },
    '#ZTWSpPro20A#':    { name: 'ZTW Spider Pro 20A',         damped_enabled: 1 },
    '#ZTWSpPro20AHV#':  { name: 'ZTW Spider Pro 20A HV',      damped_enabled: 1 },
    '#ZTWSpPro20APrm#': { name: 'ZTW Spider Pro 20A Premium', damped_enabled: 1 },
    '#ZTWSpPro30AHV#':  { name: 'ZTW Spider Pro 30A HV',      damped_enabled: 1 }
}

var BLHELI_ATMEL_ESCS = {
    '#AFRO_12A#':       { name: 'Afro 12A',                   damped_enabled: 1 },
    '#AFRO_20A#':       { name: 'Afro 20A',                   damped_enabled: 1 },
    '#AFRO_20A_HV#':    { name: 'Afro 20A HV',                damped_enabled: 1 },
    '#AFRO_30A#':       { name: 'Afro 30A',                   damped_enabled: 1 },
    '#BlueSer_12A#':    { name: 'BlueSeries 12A',             damped_enabled: 1 },
    '#BlueSer_20A#':    { name: 'BlueSeries 20A',             damped_enabled: 1 },
    '#BlueSer_30A#':    { name: 'BlueSeries 30A',             damped_enabled: 1 },
    '#BlueSer_40A#':    { name: 'BlueSeries 40A',             damped_enabled: 0 },
    '#BlueSer_60A#':    { name: 'BlueSeries 60A',             damped_enabled: 1 },
    '#BlueSer_70A#':    { name: 'BlueSeries 70A',             damped_enabled: 1 },
    '#DYS_SN20A#':      { name: 'DYS SN20A',                  damped_enabled: 1 },
    '#HK_UBEC_10A#':    { name: 'HK UBEC 10A',                damped_enabled: 0 },
    '#HK_UBEC_20A#':    { name: 'HK UBEC 20A',                damped_enabled: 1 },
    '#HK_UBEC_30A#':    { name: 'HK UBEC 30A',                damped_enabled: 1 },
    '#HK_UBEC_40A#':    { name: 'HK UBEC 40A',                damped_enabled: 1 },
    '#HK_UBEC_6A#':     { name: 'HK UBEC 6A',                 damped_enabled: 0 },
    '#MStar_10Av2#':    { name: 'Multistar 10Av2',            damped_enabled: 0 },
    '#MStar_15A#':      { name: 'Multistar 15A',              damped_enabled: 0 },
    '#MStar_20A#':      { name: 'Multistar 20A',              damped_enabled: 0 },
    '#MStar_20Av2#':    { name: 'Multistar 20Av2',            damped_enabled: 1 },
    '#MStar_20A_Nfet#': { name: 'Multistar 20A Nfet',         damped_enabled: 1 },
    '#MStar_30A#':      { name: 'Multistar 30A',              damped_enabled: 0 },
    '#MStar_40Av2#':    { name: 'Multistar 40Av2',            damped_enabled: 1 },
    '#MStar_45A#':      { name: 'Multistar 45A',              damped_enabled: 1 },
    '#Mystery_12A#':    { name: 'Mystery 12A',                damped_enabled: 0 },
    '#Mystery_30A#':    { name: 'Mystery 30A',                damped_enabled: 0 },
    '#Mystery_40A#':    { name: 'Mystery 40A',                damped_enabled: 1 },
    '#RCTIMER_40A#':    { name: 'RCTimer 40A',                damped_enabled: 1 },
    '#RCTIMERNFS_30A#': { name: 'RCTimer NFS 30A',            damped_enabled: 1 },
    '#SunRBSlim_20A#':  { name: 'Sunrise BLHeli Slim 20A',    damped_enabled: 1 },
    '#SunRBSlim_30A#':  { name: 'Sunrise BLHeli Slim 30A',    damped_enabled: 1 },
    '#SunRHiM_20A#':    { name: 'Sunrise HiMulti 20A',        damped_enabled: 1 },
    '#SunRHiM_30A#':    { name: 'Sunrise HiMulti 30A',        damped_enabled: 1 },
    '#SunRHiM_40A#':    { name: 'Sunrise HiMulti 40A',        damped_enabled: 1 },
    '#SuperS_18A#':     { name: 'SuperSimple 18A',            damped_enabled: 0 },
    '#SuperS_20A#':     { name: 'SuperSimple 20A',            damped_enabled: 0 },
    '#SuperS_30A#':     { name: 'SuperSimple 30A',            damped_enabled: 0 },
    '#SuperS_40A#':     { name: 'SuperSimple 40A',            damped_enabled: 1 },
    '#TBS_CUBE_20A#':   { name: 'TBS Cube 20A',               damped_enabled: 1 },
    '#YEP_7A#':         { name: 'YEP 7A',                     damped_enabled: 0 },
    '#ZTWSpLite18Av2#': { name: 'ZTW Spider Lite 18Av2',      damped_enabled: 1 }
}

var BLHELI_S_SILABS_LAYOUTS = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O' ]
var BLHELI_S_SILABS_CHIPS =   [ 'L', 'H' ]
var BLHELI_S_SILABS_DELAYS =  [ '00', '05', '15', '20', '25', '30', '40', '50', '70', '90' ]

var BLHELI_S_SILABS_ESCS = {
    '#A_L_00#': { name: 'A_L_0' },
    '#A_L_05#': { name: 'A_L_5' },
    '#A_L_10#': { name: 'A_L_10' },
    '#A_L_15#': { name: 'A_L_15' },
    '#A_L_20#': { name: 'A_L_20' },
    '#A_L_25#': { name: 'A_L_25' },
    '#A_L_30#': { name: 'A_L_30' },
    '#A_L_40#': { name: 'A_L_40' },
    '#A_L_50#': { name: 'A_L_50' },
    '#A_L_70#': { name: 'A_L_70' },
    '#A_L_90#': { name: 'A_L_90' },
    '#A_H_00#': { name: 'A_H_0' },
    '#A_H_05#': { name: 'A_H_5' },
    '#A_H_10#': { name: 'A_H_10' },
    '#A_H_15#': { name: 'A_H_15' },
    '#A_H_20#': { name: 'A_H_20' },
    '#A_H_25#': { name: 'A_H_25' },
    '#A_H_30#': { name: 'A_H_30' },
    '#A_H_40#': { name: 'A_H_40' },
    '#A_H_50#': { name: 'A_H_50' },
    '#A_H_70#': { name: 'A_H_70' },
    '#A_H_90#': { name: 'A_H_90' },
    '#B_L_00#': { name: 'B_L_0' },
    '#B_L_05#': { name: 'B_L_5' },
    '#B_L_10#': { name: 'B_L_10' },
    '#B_L_15#': { name: 'B_L_15' },
    '#B_L_20#': { name: 'B_L_20' },
    '#B_L_25#': { name: 'B_L_25' },
    '#B_L_30#': { name: 'B_L_30' },
    '#B_L_40#': { name: 'B_L_40' },
    '#B_L_50#': { name: 'B_L_50' },
    '#B_L_70#': { name: 'B_L_70' },
    '#B_L_90#': { name: 'B_L_90' },
    '#B_H_00#': { name: 'B_H_0' },
    '#B_H_05#': { name: 'B_H_5' },
    '#B_H_10#': { name: 'B_H_10' },
    '#B_H_15#': { name: 'B_H_15' },
    '#B_H_20#': { name: 'B_H_20' },
    '#B_H_25#': { name: 'B_H_25' },
    '#B_H_30#': { name: 'B_H_30' },
    '#B_H_40#': { name: 'B_H_40' },
    '#B_H_50#': { name: 'B_H_50' },
    '#B_H_70#': { name: 'B_H_70' },
    '#B_H_90#': { name: 'B_H_90' },
    '#C_L_00#': { name: 'C_L_0' },
    '#C_L_05#': { name: 'C_L_5' },
    '#C_L_10#': { name: 'C_L_10' },
    '#C_L_15#': { name: 'C_L_15' },
    '#C_L_20#': { name: 'C_L_20' },
    '#C_L_25#': { name: 'C_L_25' },
    '#C_L_30#': { name: 'C_L_30' },
    '#C_L_40#': { name: 'C_L_40' },
    '#C_L_50#': { name: 'C_L_50' },
    '#C_L_70#': { name: 'C_L_70' },
    '#C_L_90#': { name: 'C_L_90' },
    '#C_H_00#': { name: 'C_H_0' },
    '#C_H_05#': { name: 'C_H_5' },
    '#C_H_10#': { name: 'C_H_10' },
    '#C_H_15#': { name: 'C_H_15' },
    '#C_H_20#': { name: 'C_H_20' },
    '#C_H_25#': { name: 'C_H_25' },
    '#C_H_30#': { name: 'C_H_30' },
    '#C_H_40#': { name: 'C_H_40' },
    '#C_H_50#': { name: 'C_H_50' },
    '#C_H_70#': { name: 'C_H_70' },
    '#C_H_90#': { name: 'C_H_90' },
    '#D_L_00#': { name: 'D_L_0' },
    '#D_L_05#': { name: 'D_L_5' },
    '#D_L_10#': { name: 'D_L_10' },
    '#D_L_15#': { name: 'D_L_15' },
    '#D_L_20#': { name: 'D_L_20' },
    '#D_L_25#': { name: 'D_L_25' },
    '#D_L_30#': { name: 'D_L_30' },
    '#D_L_40#': { name: 'D_L_40' },
    '#D_L_50#': { name: 'D_L_50' },
    '#D_L_70#': { name: 'D_L_70' },
    '#D_L_90#': { name: 'D_L_90' },
    '#D_H_00#': { name: 'D_H_0' },
    '#D_H_05#': { name: 'D_H_5' },
    '#D_H_10#': { name: 'D_H_10' },
    '#D_H_15#': { name: 'D_H_15' },
    '#D_H_20#': { name: 'D_H_20' },
    '#D_H_25#': { name: 'D_H_25' },
    '#D_H_30#': { name: 'D_H_30' },
    '#D_H_40#': { name: 'D_H_40' },
    '#D_H_50#': { name: 'D_H_50' },
    '#D_H_70#': { name: 'D_H_70' },
    '#D_H_90#': { name: 'D_H_90' },
    '#E_L_00#': { name: 'E_L_0' },
    '#E_L_05#': { name: 'E_L_5' },
    '#E_L_10#': { name: 'E_L_10' },
    '#E_L_15#': { name: 'E_L_15' },
    '#E_L_20#': { name: 'E_L_20' },
    '#E_L_25#': { name: 'E_L_25' },
    '#E_L_30#': { name: 'E_L_30' },
    '#E_L_40#': { name: 'E_L_40' },
    '#E_L_50#': { name: 'E_L_50' },
    '#E_L_70#': { name: 'E_L_70' },
    '#E_L_90#': { name: 'E_L_90' },
    '#E_H_00#': { name: 'E_H_0' },
    '#E_H_05#': { name: 'E_H_5' },
    '#E_H_10#': { name: 'E_H_10' },
    '#E_H_15#': { name: 'E_H_15' },
    '#E_H_20#': { name: 'E_H_20' },
    '#E_H_25#': { name: 'E_H_25' },
    '#E_H_30#': { name: 'E_H_30' },
    '#E_H_40#': { name: 'E_H_40' },
    '#E_H_50#': { name: 'E_H_50' },
    '#E_H_70#': { name: 'E_H_70' },
    '#E_H_90#': { name: 'E_H_90' },
    '#F_L_00#': { name: 'F_L_0' },
    '#F_L_05#': { name: 'F_L_5' },
    '#F_L_10#': { name: 'F_L_10' },
    '#F_L_15#': { name: 'F_L_15' },
    '#F_L_20#': { name: 'F_L_20' },
    '#F_L_25#': { name: 'F_L_25' },
    '#F_L_30#': { name: 'F_L_30' },
    '#F_L_40#': { name: 'F_L_40' },
    '#F_L_50#': { name: 'F_L_50' },
    '#F_L_70#': { name: 'F_L_70' },
    '#F_L_90#': { name: 'F_L_90' },
    '#F_H_00#': { name: 'F_H_0' },
    '#F_H_05#': { name: 'F_H_5' },
    '#F_H_10#': { name: 'F_H_10' },
    '#F_H_15#': { name: 'F_H_15' },
    '#F_H_20#': { name: 'F_H_20' },
    '#F_H_25#': { name: 'F_H_25' },
    '#F_H_30#': { name: 'F_H_30' },
    '#F_H_40#': { name: 'F_H_40' },
    '#F_H_50#': { name: 'F_H_50' },
    '#F_H_70#': { name: 'F_H_70' },
    '#F_H_90#': { name: 'F_H_90' },
    '#G_L_00#': { name: 'G_L_0' },
    '#G_L_05#': { name: 'G_L_5' },
    '#G_L_10#': { name: 'G_L_10' },
    '#G_L_15#': { name: 'G_L_15' },
    '#G_L_20#': { name: 'G_L_20' },
    '#G_L_25#': { name: 'G_L_25' },
    '#G_L_30#': { name: 'G_L_30' },
    '#G_L_40#': { name: 'G_L_40' },
    '#G_L_50#': { name: 'G_L_50' },
    '#G_L_70#': { name: 'G_L_70' },
    '#G_L_90#': { name: 'G_L_90' },
    '#G_H_00#': { name: 'G_H_0' },
    '#G_H_05#': { name: 'G_H_5' },
    '#G_H_10#': { name: 'G_H_10' },
    '#G_H_15#': { name: 'G_H_15' },
    '#G_H_20#': { name: 'G_H_20' },
    '#G_H_25#': { name: 'G_H_25' },
    '#G_H_30#': { name: 'G_H_30' },
    '#G_H_40#': { name: 'G_H_40' },
    '#G_H_50#': { name: 'G_H_50' },
    '#G_H_70#': { name: 'G_H_70' },
    '#G_H_90#': { name: 'G_H_90' },
    '#H_L_00#': { name: 'H_L_0' },
    '#H_L_05#': { name: 'H_L_5' },
    '#H_L_10#': { name: 'H_L_10' },
    '#H_L_15#': { name: 'H_L_15' },
    '#H_L_20#': { name: 'H_L_20' },
    '#H_L_25#': { name: 'H_L_25' },
    '#H_L_30#': { name: 'H_L_30' },
    '#H_L_40#': { name: 'H_L_40' },
    '#H_L_50#': { name: 'H_L_50' },
    '#H_L_70#': { name: 'H_L_70' },
    '#H_L_90#': { name: 'H_L_90' },
    '#H_H_00#': { name: 'H_H_0' },
    '#H_H_05#': { name: 'H_H_5' },
    '#H_H_10#': { name: 'H_H_10' },
    '#H_H_15#': { name: 'H_H_15' },
    '#H_H_20#': { name: 'H_H_20' },
    '#H_H_25#': { name: 'H_H_25' },
    '#H_H_30#': { name: 'H_H_30' },
    '#H_H_40#': { name: 'H_H_40' },
    '#H_H_50#': { name: 'H_H_50' },
    '#H_H_70#': { name: 'H_H_70' },
    '#H_H_90#': { name: 'H_H_90' },
    '#I_L_00#': { name: 'I_L_0' },
    '#I_L_05#': { name: 'I_L_5' },
    '#I_L_10#': { name: 'I_L_10' },
    '#I_L_15#': { name: 'I_L_15' },
    '#I_L_20#': { name: 'I_L_20' },
    '#I_L_25#': { name: 'I_L_25' },
    '#I_L_30#': { name: 'I_L_30' },
    '#I_L_40#': { name: 'I_L_40' },
    '#I_L_50#': { name: 'I_L_50' },
    '#I_L_70#': { name: 'I_L_70' },
    '#I_L_90#': { name: 'I_L_90' },
    '#I_H_00#': { name: 'I_H_0' },
    '#I_H_05#': { name: 'I_H_5' },
    '#I_H_10#': { name: 'I_H_10' },
    '#I_H_15#': { name: 'I_H_15' },
    '#I_H_20#': { name: 'I_H_20' },
    '#I_H_25#': { name: 'I_H_25' },
    '#I_H_30#': { name: 'I_H_30' },
    '#I_H_40#': { name: 'I_H_40' },
    '#I_H_50#': { name: 'I_H_50' },
    '#I_H_70#': { name: 'I_H_70' },
    '#I_H_90#': { name: 'I_H_90' },
    '#J_L_00#': { name: 'J_L_0' },
    '#J_L_05#': { name: 'J_L_5' },
    '#J_L_10#': { name: 'J_L_10' },
    '#J_L_15#': { name: 'J_L_15' },
    '#J_L_20#': { name: 'J_L_20' },
    '#J_L_25#': { name: 'J_L_25' },
    '#J_L_30#': { name: 'J_L_30' },
    '#J_L_40#': { name: 'J_L_40' },
    '#J_L_50#': { name: 'J_L_50' },
    '#J_L_70#': { name: 'J_L_70' },
    '#J_L_90#': { name: 'J_L_90' },
    '#J_H_00#': { name: 'J_H_0' },
    '#J_H_05#': { name: 'J_H_5' },
    '#J_H_10#': { name: 'J_H_10' },
    '#J_H_15#': { name: 'J_H_15' },
    '#J_H_20#': { name: 'J_H_20' },
    '#J_H_25#': { name: 'J_H_25' },
    '#J_H_30#': { name: 'J_H_30' },
    '#J_H_40#': { name: 'J_H_40' },
    '#J_H_50#': { name: 'J_H_50' },
    '#J_H_70#': { name: 'J_H_70' },
    '#J_H_90#': { name: 'J_H_90' },
    '#K_L_00#': { name: 'K_L_0' },
    '#K_L_05#': { name: 'K_L_5' },
    '#K_L_10#': { name: 'K_L_10' },
    '#K_L_15#': { name: 'K_L_15' },
    '#K_L_20#': { name: 'K_L_20' },
    '#K_L_25#': { name: 'K_L_25' },
    '#K_L_30#': { name: 'K_L_30' },
    '#K_L_40#': { name: 'K_L_40' },
    '#K_L_50#': { name: 'K_L_50' },
    '#K_L_70#': { name: 'K_L_70' },
    '#K_L_90#': { name: 'K_L_90' },
    '#K_H_00#': { name: 'K_H_0' },
    '#K_H_05#': { name: 'K_H_5' },
    '#K_H_10#': { name: 'K_H_10' },
    '#K_H_15#': { name: 'K_H_15' },
    '#K_H_20#': { name: 'K_H_20' },
    '#K_H_25#': { name: 'K_H_25' },
    '#K_H_30#': { name: 'K_H_30' },
    '#K_H_40#': { name: 'K_H_40' },
    '#K_H_50#': { name: 'K_H_50' },
    '#K_H_70#': { name: 'K_H_70' },
    '#K_H_90#': { name: 'K_H_90' },
    '#L_L_00#': { name: 'L_L_0' },
    '#L_L_05#': { name: 'L_L_5' },
    '#L_L_10#': { name: 'L_L_10' },
    '#L_L_15#': { name: 'L_L_15' },
    '#L_L_20#': { name: 'L_L_20' },
    '#L_L_25#': { name: 'L_L_25' },
    '#L_L_30#': { name: 'L_L_30' },
    '#L_L_40#': { name: 'L_L_40' },
    '#L_L_50#': { name: 'L_L_50' },
    '#L_L_70#': { name: 'L_L_70' },
    '#L_L_90#': { name: 'L_L_90' },
    '#L_H_00#': { name: 'L_H_0' },
    '#L_H_05#': { name: 'L_H_5' },
    '#L_H_10#': { name: 'L_H_10' },
    '#L_H_15#': { name: 'L_H_15' },
    '#L_H_20#': { name: 'L_H_20' },
    '#L_H_25#': { name: 'L_H_25' },
    '#L_H_30#': { name: 'L_H_30' },
    '#L_H_40#': { name: 'L_H_40' },
    '#L_H_50#': { name: 'L_H_50' },
    '#L_H_70#': { name: 'L_H_70' },
    '#L_H_90#': { name: 'L_H_90' },
    '#M_L_00#': { name: 'M_L_0' },
    '#M_L_05#': { name: 'M_L_5' },
    '#M_L_10#': { name: 'M_L_10' },
    '#M_L_15#': { name: 'M_L_15' },
    '#M_L_20#': { name: 'M_L_20' },
    '#M_L_25#': { name: 'M_L_25' },
    '#M_L_30#': { name: 'M_L_30' },
    '#M_L_40#': { name: 'M_L_40' },
    '#M_L_50#': { name: 'M_L_50' },
    '#M_L_70#': { name: 'M_L_70' },
    '#M_L_90#': { name: 'M_L_90' },
    '#M_H_00#': { name: 'M_H_0' },
    '#M_H_05#': { name: 'M_H_5' },
    '#M_H_10#': { name: 'M_H_10' },
    '#M_H_15#': { name: 'M_H_15' },
    '#M_H_20#': { name: 'M_H_20' },
    '#M_H_25#': { name: 'M_H_25' },
    '#M_H_30#': { name: 'M_H_30' },
    '#M_H_40#': { name: 'M_H_40' },
    '#M_H_50#': { name: 'M_H_50' },
    '#M_H_70#': { name: 'M_H_70' },
    '#M_H_90#': { name: 'M_H_90' },
    '#N_L_00#': { name: 'N_L_0' },
    '#N_L_05#': { name: 'N_L_5' },
    '#N_L_10#': { name: 'N_L_10' },
    '#N_L_15#': { name: 'N_L_15' },
    '#N_L_20#': { name: 'N_L_20' },
    '#N_L_25#': { name: 'N_L_25' },
    '#N_L_30#': { name: 'N_L_30' },
    '#N_L_40#': { name: 'N_L_40' },
    '#N_L_50#': { name: 'N_L_50' },
    '#N_L_70#': { name: 'N_L_70' },
    '#N_L_90#': { name: 'N_L_90' },
    '#N_H_00#': { name: 'N_H_0' },
    '#N_H_05#': { name: 'N_H_5' },
    '#N_H_10#': { name: 'N_H_10' },
    '#N_H_15#': { name: 'N_H_15' },
    '#N_H_20#': { name: 'N_H_20' },
    '#N_H_25#': { name: 'N_H_25' },
    '#N_H_30#': { name: 'N_H_30' },
    '#N_H_40#': { name: 'N_H_40' },
    '#N_H_50#': { name: 'N_H_50' },
    '#N_H_70#': { name: 'N_H_70' },
    '#N_H_90#': { name: 'N_H_90' },
    '#O_L_00#': { name: 'O_L_0' },
    '#O_L_05#': { name: 'O_L_5' },
    '#O_L_10#': { name: 'O_L_10' },
    '#O_L_15#': { name: 'O_L_15' },
    '#O_L_20#': { name: 'O_L_20' },
    '#O_L_25#': { name: 'O_L_25' },
    '#O_L_30#': { name: 'O_L_30' },
    '#O_L_40#': { name: 'O_L_40' },
    '#O_L_50#': { name: 'O_L_50' },
    '#O_L_70#': { name: 'O_L_70' },
    '#O_L_90#': { name: 'O_L_90' },
    '#O_H_00#': { name: 'O_H_0' },
    '#O_H_05#': { name: 'O_H_5' },
    '#O_H_10#': { name: 'O_H_10' },
    '#O_H_15#': { name: 'O_H_15' },
    '#O_H_20#': { name: 'O_H_20' },
    '#O_H_25#': { name: 'O_H_25' },
    '#O_H_30#': { name: 'O_H_30' },
    '#O_H_40#': { name: 'O_H_40' },
    '#O_H_50#': { name: 'O_H_50' },
    '#O_H_70#': { name: 'O_H_70' },
    '#O_H_90#': { name: 'O_H_90' },
};

var BLHELI_S_SILABS_MCUS = [
    { name: 'EFM8BB10x', signature: 0xE8B1, page_size: 0x200, flash_size: 0x2000 },
    { name: 'EFM8BB21x', signature: 0xE8B2, page_size: 0x200, flash_size: 0x2000 }
];

var BLHELI_SILABS_MCUS = [
    { name: 'C8051F31x', signature: 0xF310, page_size: 0x200, flash_size: 0x2000 },
    { name: 'C8051F33x', signature: 0xF330, page_size: 0x200, flash_size: 0x2000 },
    { name: 'C8051F39x/37x', signature: 0xF390, page_size: 0x200, flash_size: 0x2000 },
    { name: 'C8051F41x', signature: 0xF410, page_size: 0x200, flash_size: 0x2000 },
    { name: 'C8051F85x', signature: 0xF850, page_size: 0x200, flash_size: 0x2000 }
];

var BLHELI_ATMEL_MCUS = [
    { name: 'ATmega8(A)', signature: 0x9307, page_size: 0x20, flash_size: 0x2000, eeprom_size: 0x200 },
    { name: 'ATmega88(A)', signature: 0x930A, page_size: 0x20, flash_size: 0x2000, eeprom_size: 0x200 },
    { name: 'ATmega88P(A)', signature: 0x930F, page_size: 0x20, flash_size: 0x2000, eeprom_size: 0x200 },
    { name: 'ATmega168P(A)', signature: 0x940B, page_size: 0x40, flash_size: 0x4000, eeprom_size: 0x200 }
];
