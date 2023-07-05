Imports MySql.Data.MySqlClient
Public Class Test
    Dim Msg
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click


    End Sub

    Private Sub DataGridView1_CellContentClick(sender As Object, e As DataGridViewCellEventArgs) Handles DataGridView1.CellContentClick
        Dim connection As New MySqlConnection("datasource=DESKTOP-JJ2E3DS\SQLEXPRESS;username=sa;password=viethung97;database=PaymentDetailDb")
        Dim table As New DataTable()
        Dim adapter As New MySqlDataAdapter("select * from PaymentDetails", connection)

        adapter.Fill(table)
        DataGridView1.DataSource = table

    End Sub
End Class
