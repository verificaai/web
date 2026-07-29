import { useCallback, useEffect, useRef, useState } from "react"
import { CheckCircle2, Loader2, UploadCloud, X } from "lucide-react"
import { Link } from 'react-router-dom'

const BRAND = { green: '#00CB00', blue: '#183EFF' };
const MAX_MB = 100;

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function Upload(){
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        if(!file){
            setPreviewUrl(null);
            return;
        }
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);   
    }, [file]);

    const accept = useCallback((f) =>{
        if(!f) return;
        if(!f.type.startsWith('video/')){
            setError("Selecione um arquivo de vídeo (MP4, MOV, WEBM).");
            return;
        }
        if(f.size > MAX_MB * 1024 * 1024){
            setError(`O arquivo excede ${MAX_MB}MB.`);
            return;
        }
        setError(null);
        setFile(f);
    }, []);

    const reset = () => {
        setFile(null);
        setError(null);
        setLoading(false);
        if(inputRef.current) inputRef.current.value = "";
    };

    const onVerify = () =>{
        if(!file || loading) return;
        setLoading(true);
        window.setTimeout(() => setLoading(false), 2600);
    }

    return(
        <div className = 'w-full'>
            <div
                onDragOver = {(e) =>{
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave = {() => setDragOver(false)}
                onDrop = {(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    accept(e.dataTransfer.files?.[0]);
                }}

                className = 'rounded-2xl p-[2px] transition-all duration-300'
                style = {
                    dragOver
                        ? { backgroundImage : `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }
                        : undefined
                }
            >
                {!file ? (
                    <button
                        type = 'button'
                        onClick = {() => inputRef.current?.click()}
                        aria-label = "Carregar vídeo para análise"
                        className = {`group flex w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-all duration-300 sm:py-20 ${
                            dragOver
                                ? 'border-transparent bg-[#183EFF]/5'
                                : 'border-border bg-muted/40 hover:border-[#183EFF] hover:bg-[#183EFF]/5'
                        }`}
                    >
                        <span
                            className = 'flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20'
                            style = {{ backgroundColor: 'rgba(24,62,255,0.10)', color: BRAND.blue }}
                        >
                            <UploadCloud size={30} aria-hidden='true' />
                        </span>

                        <span className = 'text-base font-bold text-foreground sm:text-lg'>
                            Carregar vídeo
                        </span>
                        <span className = 'max-w-sm text-xs text-muted-foreground sm:text-sm'>
                            Arraste e solte ou clique para selecionar (MP4, MOV, WEBM - até {MAX_MB}MB)
                        </span>
                    </button>
                ) : (
                    <div className = 'rounded-2xl border-2 border-dashed border-[#00CB00] bg-[#00XB00]/5 p-5 transition-all duration-300 sm:p-7'>
                        <div className = 'flex flex-col gap-5 sm:flex-row sm:items-center'>
                            {previewUrl && (
                                <video 
                                    src = {previewUrl}
                                    controls
                                    className = 'w-full rounded-xl border border-border bg-background sm:h-32 sm:w-56 sm:object-cover'
                                />
                            )}

                            <div className = 'min-w-0 flex-1'>
                                <div className = 'flex items-start gap-2'>
                                    <CheckCircle2 size={18} style={{ color: BRAND.green }} aria-hidden='true' class='mt-0.5 shrink-0' />
                                    <div className = 'min-w-0'>
                                        <p className = 'truncate text-sm font-semiold text-foreground'>{file.name}</p>
                                        <p className = 'mt-1 text-muted-foreground'>{formatSize(file.size)}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                type = 'button'
                                onClick = {reset}
                                aria-label = "Remover arquivo"
                                className = 'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-border text-muted-foreground transition-colors duration-300 hover:border-[#FF5900] hover:text-[#FF5900]'
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <input 
                ref = {inputRef}
                type = 'file'
                accept = 'video/*'
                className = 'sr-only'
                onChange = {(e) => accept(e.target.files?.[0] ?? undefined)}
            />

            {error && (
                <p role = 'alert' className = 'mt-3 text-sm' style = {{ color: '#FF5900' }}>
                    {error}
                </p>
            )}

            {loading && (
                <div className = 'mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted' role = 'status' aria-label = "Analisando vídeo">
                    <div 
                        className = 'h-full w-1/3 animate-[va-progress_1.4s_ease-in-out_infinite] rounded-full'
                        style = {{ backgroundImage: 'linear-gradient(90deg, #00CB00, #183EFF, #FFCB00, #FF5900)' }}
                    />
                </div>
            )}

            <div className = 'mt-8 flex justify-end'>
                <button
                    type = 'button'
                    onClick = {onVerify}
                    disabled = {!file || loading}
                    className = 'inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white transition-all duration-300 enabled:hover:scale-[1.03] enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto'
                    style = {{ backgroundImage: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }}
                >
                    {loading && <Loader2 size={16} className = 'animate-spin' aria-hidden='true' />}
                    {loading ? "Analisando..." : "Verificar"}
                </button>
            </div>
        </div>
    );
}