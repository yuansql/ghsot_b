
module.exports = {
	docName: 'post',
	read: {
		permissions: true,
		async query() {
			const sql = 'select (json_text) from tab_jsons order by id desc LIMIT 1';
			connection.connect(function(err) {
				if (err)
					console.log('[SELECT ERROR] - ',err.message);
				// 如果连接成功
				connection.query(sql, function (err, result) {
					// 如果在执行上述查询时出现任何错误，则抛出错误
					if (err) throw err;
					Object.keys(result).forEach(function(key) {
						const json_text = result[key].json_text;
						return {json_text};
					});
				});
			});
			
			
		}
	}
};
