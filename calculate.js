function calculate_all()
{
    var item1 = 0;
    var item2 = 0;
    var item3 = 0;
    var item4 = 0;
    var item5 = 0;
    var item6 = 0;
    var item7 = 0;
    var item8 = 0;
    var item9 = 0;

    var item1 = (document.getElementById("item1").value);
    var item2 = (document.getElementById("item2").value);
    var item3 = (document.getElementById("item3").value);
    var item4 = (document.getElementById("item4").value);
    var item5 = (document.getElementById("item5").value);
    var item6 = (document.getElementById("item6").value);
    var item7 = (document.getElementById("item7").value);
    var item8 = (document.getElementById("item8").value);
    var item9 = (document.getElementById("item9").value);

    var item1_t = item1 * 4.75;
    var item2_t = item2 * 5.50;
    var item3_t = item3 * 4.50;
    var item4_t = item4 * 2.50;
    var item5_t = item5 * 3.25;
    var item6_t = item6 * 1.75;
    var item7_t = item7 * 1.50;
    var item8_t = item8 * 2.25;
    var item9_t = item9 * 1.75;

    document.getElementById("item1_total").value = item1 * 4.75;
    document.getElementById("item2_total").value = item2 * 5.50;
    document.getElementById("item3_total").value = item3 * 4.50;
    document.getElementById("item4_total").value = item4 * 2.50;
    document.getElementById("item5_total").value = item5 * 3.25;
    document.getElementById("item6_total").value = item6 * 1.75;
    document.getElementById("item7_total").value = item7 * 1.50;
    document.getElementById("item8_total").value = item8 * 2.25;
    document.getElementById("item9_total").value = item9 * 1.75;

    var total_quantity = item1*1 + item2*1 + item3*1 + item4*1 + item5*1 + item6*1 + item7*1 + item8*1 + item9*1;
    var subtotal = item1_t + item2_t + item3_t + item4_t + item5_t + item6_t + item7_t + item8_t + item9_t;
    var shipping_total = total_quantity * 10;
    var total = subtotal + shipping_total;

    document.getElementById("product_subtotal").value = subtotal;
    document.getElementById("total_qty").value = total_quantity;
    document.getElementById("shipping_total").value = shipping_total;
    document.getElementById("order_total").value = total;
}
