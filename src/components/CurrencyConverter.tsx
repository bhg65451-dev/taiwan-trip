'use client';
import {useEffect,useState} from 'react';
import {ArrowLeftRight} from 'lucide-react';
type Currency='USD'|'JPY'|'KRW'|'EUR'|'HKD';
const fallback:Record<Currency,number>={USD:0.031,JPY:4.77,KRW:42.4,EUR:0.028,HKD:0.242};
const names:Record<Currency,string>={USD:'美金',JPY:'日圓',KRW:'韓元',EUR:'歐元',HKD:'港幣'};
export default function CurrencyConverter(){
 const[amount,setAmount]=useState('1000');const[cur,setCur]=useState<Currency>('USD');const[rates,setRates]=useState(fallback);const[rateDate,setRateDate]=useState('');const[live,setLive]=useState(false);
 useEffect(()=>{const controller=new AbortController();fetch('https://api.frankfurter.dev/v1/latest?base=TWD&symbols=USD,JPY,KRW,EUR,HKD',{signal:controller.signal}).then(response=>{if(!response.ok)throw new Error('匯率服務暫時無法使用');return response.json() as Promise<{date:string;rates:Partial<Record<Currency,number>>}>}).then(data=>{const fresh={...fallback};for(const code of Object.keys(fresh) as Currency[]){const value=data.rates[code];if(typeof value==='number'&&Number.isFinite(value))fresh[code]=value}setRates(fresh);setRateDate(data.date);setLive(true)}).catch(()=>{});return()=>controller.abort()},[]);
 const converted=((Number(amount)||0)*rates[cur]).toLocaleString('en-US',{maximumFractionDigits:2});
 return <div className="currency-box"><div className="currency-heading"><span className="eyebrow">CURRENCY EXCHANGE</span><h3>旅行預算，輕鬆換算</h3><p>{live?'最新參考匯率 · '+rateDate:'參考匯率估算；目前使用內建備用匯率。'}</p></div><div className="currency-fields"><label>新台幣 TWD<input type="number" min="0" value={amount} onChange={e=>setAmount(e.target.value)}/></label><ArrowLeftRight className="currency-arrow" size={20}/><label><select value={cur} onChange={e=>setCur(e.target.value as Currency)}>{(Object.keys(names) as Currency[]).map(k=><option key={k} value={k}>{names[k]} {k}</option>)}</select><output>{converted} <small>{cur}</small></output></label></div><div className="rate-note">1 TWD ≈ {rates[cur].toLocaleString('en-US',{maximumFractionDigits:4})} {cur} · {live?'資料更新 '+rateDate:'備用估算'}</div><p className="rate-disclaimer">參考匯率每日更新，非即時市場或銀行成交報價。</p></div>;
}
