Imports MySql.Data.MySqlClient
Public Class Test
    Dim Msg
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
            Dim connection As New SqlConnection("Data Source=DESKTOP-JJ2E3DS\SQLEXPRESS;User ID=sa;Password=viethung97;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False")
            Dim table As New DataTable()
            Dim a As New SqlCommand("select * from PaymentDetails", connection)
            Dim adapter As New SqlDataAdapter(a)
            adapter.Fill(table)
            DataGridView1.DataSource = table

    End Sub

    Private Sub DataGridView1_CellContentClick(sender As Object, e As DataGridViewCellEventArgs) Handles DataGridView1.CellContentClick
        Dim connection As New MySqlConnection("datasource=DESKTOP-JJ2E3DS\SQLEXPRESS;username=sa;password=viethung97;database=PaymentDetailDb")
        Dim table As New DataTable()
        Dim adapter As New MySqlDataAdapter("select * from PaymentDetails", connection)

        adapter.Fill(table)
        DataGridView1.DataSource = table
         Dim cDataBase As New clsOracleDB()
        Dim Ocmd As OracleCommand = New OracleCommand("", cDataBase.con)

        Dim prm_HP_CD As OracleParameter = New OracleParameter("prm_HP_CD", OracleDbType.Int16, ParameterDirection.Input)
        Dim prm_USER_ID8 As OracleParameter = New OracleParameter("prm_USER_ID8", OracleDbType.Char, ParameterDirection.Input)
        Dim prm_KOUMOKU_KB As OracleParameter = New OracleParameter("prm_KOUMOKU_KB", OracleDbType.Int16, ParameterDirection.Input)
        Dim prm_SEQ_NOD As OracleParameter = New OracleParameter("prm_SEQ_NO", OracleDbType.Int16, ParameterDirection.Input)
        Dim prm_CONFIG_VALUE As OracleParameter = New OracleParameter("prm_CONFIG_VALUE", OracleDbType.Int16, ParameterDirection.Output)


        Ocmd.CommandType = CommandType.StoredProcedure
        Ocmd.CommandText = "PK_USSO_200.gpGetConfigValueByUSER_KANRI_SUB_TBL"

        prm_HP_CD.Value = 0
        prm_USER_ID8.Value = UserID
        prm_KOUMOKU_KB.Value = 2
        prm_SEQ_NOD.Value = 1

        Ocmd.Parameters.Add(prm_HP_CD)
        Ocmd.Parameters.Add(prm_USER_ID8)
        Ocmd.Parameters.Add(prm_KOUMOKU_KB)
        Ocmd.Parameters.Add(prm_SEQ_NOD)
        Ocmd.Parameters.Add(prm_CONFIG_VALUE)
    End Sub
End Class
