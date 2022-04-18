export const queries = {

  searchSegment: async (_ctx: any, args: SearchSegmentInput, __: Context) => {


    console.log("args ", args)

    if(args.isAuthenticated === true){

      const selectedFacets = args.selectedFacets || [];

      if (selectedFacets.length > 0){
        return [{ key: selectedFacets[0].key, value: selectedFacets[0].value }];
      } 
    } 

    return [];

  }
}