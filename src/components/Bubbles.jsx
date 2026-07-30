export function Bubbles(){
    return(
        <div aria-hidden = 'true' className = 'pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
            <div
                className = 'absolute -left-32 -top-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl'
                style = {{ backgroundColor: '#00CB00' }}
            />

            <div 
                className = 'absolute -right-28 top-10 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl'
                style = {{ backgroundColor: '#183EFF' }}
            />

            <div 
                className = 'absolute bottom-[-6rem] left-1/3 h-[22rem] w-[22rem] rounded-full opacity-[0.16] blur-3xl'
                style = {{ backgroundColor: '#FFCB00' }}
            />
        </div>
    );
}