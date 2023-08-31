<script>

    let randomAdvice = "";
    let id;
    const getAdvices = async () => {
        const res = await fetch(`https://api.adviceslip.com/advice`, {cache: 'no-cache'})
        const data = await res.json()
        const advice = data.slip.advice;

        randomAdvice =advice;
        id=data.slip.id;
      }

      getAdvices()
      $:console.log(randomAdvice, id)


      

</script>


