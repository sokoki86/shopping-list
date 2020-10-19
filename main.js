function main() {


    $("#js-shopping-list-form").on(`submit`, function (evt){
        evt.preventDefault();
        let listItem = $("#shopping-list-entry").val();
        console.log(listItem);
        let template = `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
        $(".shopping-list").append(template);
     
       
    });

    $('.shopping-list').on('click','.shopping-item-toggle',function(event) {
        const targetItem = $(event.currentTarget).closest("li");
        targetItem.find(".shopping-item").toggleClass('shopping-item__checked');
      });
    

      $('.shopping-list').on('click','.shopping-item-delete',function(event) {
        const delItem = $(event.currentTarget).closest("li");
        delItem.remove();
      });


}





$(main);
