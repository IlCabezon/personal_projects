/* //helper functions 
export const apibd = (state,payload)=>{
    let filter;
    if(payload === 'api'){
        filter = state.flat().filter(f=>typeof f.id === 'number')	
    }
    if(payload === 'db'){
        filter = state.flat().filter(f=>typeof f.id !== 'number')
    }


    let filtered = Array(Math.ceil(filter?.length/12)).fill().map((e,i)=>filter?.slice(((i+1)*12)-12,(i+1)*12))

    const totalP = filtered?.map((_,i)=>i+1)
    filtered = filtered.length?filtered:[1]
    return [filtered,totalP]
} 

let filter = [];
let result = []

export const filterF = (state,payload)=>{
    if(payload.length===0)return [state,[0,1,2,3,4]]
    if(payload.length>2) return [[1],[0]]
    if(payload.length < 2){
        result = []
        filter = []
        for(let i = 0; i < state.flat().length;i++){
            for(let t = 0; t<state.flat()[i].types.length;t++){ 
                if(state.flat()[i].types[t].name === payload[0]){
                    filter.push(state.flat()[i])
          
                }
            }
        }
        if(!filter.length)return [[1],[0]]
    }
    else if(payload.length===2){
        let aux = []
        
        for(let i=0;i<filter.length;i++){
            if(filter[i].types.length>=2){
               if(filter[i].types.find(e=>e.name === payload[0]))aux.push('true')
               if(filter[i].types.find(e=>e.name === payload[1]))aux.push('true')
            }
            if(aux.length === 2) {
                result.push(filter[i])
                aux = []
            }
        }
        if(!result.length)return [[1],[0]]
        filter = []
    }
    let filtered = Array(Math.ceil((filter.length?filter:result).length/12)).fill().map((e,i)=>(filter.length?filter:result)?.slice(((i+1)*12)-12,(i+1)*12))
    const totalP = filtered?.map((_,i)=>i+1)
    return[filtered,totalP]
} */

export const filterF = (state,payload)=>{
    let filter;
    if(payload !== 'api' || payload !== 'db'){
         filter = state.flat().filter((f)=>f.types.length === 1 ? f.types[0].name === payload : f.types[1].name === payload || f.types[0].name === payload)
    }
    if(payload === 'api'){
        filter = state.flat().filter(f=>typeof f.id === 'number')	
    }
    if(payload === 'db'){
        filter = state.flat().filter(f=>typeof f.id !== 'number')
    }

    const filtered = Array(Math.ceil(filter?.length/12)).fill().map((e,i)=>filter?.slice(((i+1)*12)-12,(i+1)*12))

    const totalP = filtered?.map((_,i)=>i+1)
    
    return [filtered.length?filtered:[1],totalP]
}

export const filterFav = (state,payload)=>{
    let pokes = [];
    
    for (let e in state) {
        pokes.push(state[e]);
    }
    
    let filter = pokes.filter((f)=>f.types.length === 1 ? f.types[0] === payload : f.types[1] === payload || f.types[0] === payload)
    return filter.length?filter:[false]
}

export const sort = (state,payload)=>{			
    let filter = state.flat().sort((a,b)=>{
        return a.name > b.name ? payload==='a-z'?1:-1 :a.name < b.name?payload==='a-z'?-1:1:0
    })	
    if(payload === 'major' || payload === 'minor'){
        filter = state.flat().sort((a,b)=>{
            return a.attack > b.attack ? payload==='minor'?1:-1 :a.attack < b.attack?payload==='minor'?-1:1:0
        })
    }
    const filtered = Array(Math.ceil(filter?.length/12)).fill().map((e,i)=>filter?.slice(((i+1)*12)-12,(i+1)*12))
    const totalP = filtered?.map((_,i)=>i+1)
    return [filtered,totalP]
}

export const deleteFav = (state,id)=>{
    let pokes = [];
    
    for (let e in state) {
        pokes.push(state[e]);
        if(state[e].id === id){
            delete state[e]
        }
    }
    const favourites = pokes.filter(f=>f.id!==id)
    
    return [favourites,state]
}
/*
for (let e in state) {
        if(state[e].id === id){
            delete state[e]
        }
    }
    
    return state
*/